import { useEffect, useRef, useState } from 'react';
import styles from './HeroBackground.module.css';

type VisualizeState = {
    title: string;
    description: string;
    morph: number;
    intensity: number;
    velocityBase: number;
    particleSpread: number;
    dopplerShift: number;
    colorRange: [string, string, string];
};

interface AdvancedParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    originX: number;
    originY: number;
    r: number;
    depth: number;
    phase: number;
    currentSpeedX: number;
}

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [stateIdx, setStateIdx] = useState(0);

    const visualizations: VisualizeState[] = [
        {
            title: "Stable Singularity",
            description: "Minimal distortion, calm cyan flow",
            morph: 1.0,
            intensity: 1.0,
            velocityBase: 1.0,
            particleSpread: 50,
            dopplerShift: 0.1,
            colorRange: ['#0a293c', '#38bdf8', '#62b5b0']
        },
        {
            title: "Accretion Turbulence",
            description: "Warping streams with Doppler red-shift",
            morph: 3.0,
            intensity: 1.6,
            velocityBase: 2.5,
            particleSpread: 70,
            dopplerShift: 0.7,
            colorRange: ['#1c0404', '#ffaa00', '#ff0000']
        },
        {
            title: "Relativistic Collapse",
            description: "Critical velocity, high energy flash",
            morph: 5.0,
            intensity: 2.8,
            velocityBase: 4.0,
            particleSpread: 35,
            dopplerShift: 1.0,
            colorRange: ['#000000', '#ff0044', '#ffffff']
        }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: AdvancedParticle[] = [];
        const mouse = { x: width / 2, y: height / 2 };

        const generateParticles = () => {
            particles.length = 0;
            const particleCount = 1200;
            for (let i = 0; i < particleCount; i++) {
                const depth = Math.random();
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: 0,
                    vy: 0,
                    originX: Math.random() * width,
                    originY: Math.random() * height,
                    r: Math.random() * 1.5 + 0.5,
                    depth,
                    phase: Math.random() * Math.PI * 2,
                    currentSpeedX: 0
                });
            }
        };
        generateParticles();

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            generateParticles();
        };
        window.addEventListener('resize', resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const viz = visualizations[stateIdx];

            ctx.fillStyle = `rgba(10, 41, 60, 0.08)`;
            ctx.fillRect(0, 0, width, height);

            if (containerRef.current) {
                const pX = (mouse.x - width / 2) * 0.015 * viz.velocityBase;
                const pY = (mouse.y - height / 2) * 0.015 * viz.velocityBase;
                containerRef.current.style.transform = `translate3d(${pX}px, ${pY}px, 0)`;
            }

            particles.forEach((p) => {
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
                const distMouse = Math.sqrt(distMouseSq);

                let force = 0;
                if (distMouse < viz.particleSpread * 2) {
                    force = (1 - distMouse / (viz.particleSpread * 2)) * 12;
                }
                const angle = Math.atan2(dyMouse, dxMouse);

                p.vx = (1.0 - (p.depth * 0.9)) * viz.velocityBase;
                p.vy = 0.3 * viz.morph * Math.sin(p.phase);

                p.phase += 0.01;

                p.x += p.vx - Math.cos(angle) * force;
                p.y += p.vy - Math.sin(angle) * force;

                if (p.x > width + 20) p.x = -20;
                if (p.x < -20) p.x = width + 20;
                if (p.y > height + 20) p.y = -20;
                if (p.y < -20) p.y = height + 20;

                p.currentSpeedX = Math.abs(p.vx - Math.cos(angle) * force);
            });

            particles.forEach((p) => {
                const baseShift = (p.depth * 2) - 1.0;
                const speedMult = 1.0 + (p.currentSpeedX / viz.velocityBase) * 0.5;
                const relativisticShift = baseShift * speedMult * viz.dopplerShift;

                let color;
                if (relativisticShift > 0.4) {
                    color = viz.colorRange[2];
                } else if (relativisticShift < -0.4) {
                    color = viz.colorRange[0];
                } else {
                    color = viz.colorRange[1];
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

                const finalIntensity = Math.min(1.0, viz.intensity + (relativisticShift * 0.2));
                ctx.fillStyle = `${color}${Math.floor(finalIntensity * 255).toString(16).padStart(2, '0')}`;

                ctx.globalCompositeOperation = 'lighter';
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const transitionTimer = setInterval(() => {
            setStateIdx((prev) => (prev + 1) % visualizations.length);
        }, 10000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(transitionTimer);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [stateIdx]);

    return (
        <div className={styles.bgViewport}>
            <div ref={containerRef} className={styles.parallaxWrapper}>
                <canvas ref={canvasRef} className={styles.networkCanvas} />
            </div>
            <div className={styles.vignetteOverlay} />
            <div className={styles.glowSpotlight} />
        </div>
    );
};

export default HeroBackground;