import styles from '../home/projects/projects.module.css'
import Data_img from './img/img.png'
import E_img from './img/img_1.png'
import Chat_img from './img/img_2.png'
import HIT_ai from './img/img_3.png'

const Raw_Data = [
    {
        img: Data_img,
        title: "Data API Dashboard",
        Bio: "A responsive web application that extracts data from live APIs with an interactive 3D UI.",
    },
    {
        img: E_img,
        title: "E-Commerce Web Application",
        Bio: "Includes full CRUD functionality, an Admin Dashboard for special users, and product image upload handling."
    },
    {
        img: Chat_img,
        title: "Live Chat Web Application",
        Bio: "Using Socket.IO to establish a live, two-way communication loop with dynamic channel features."
    },
    {
        img: HIT_ai,
        title: "Ai pipeline simulation",
        Bio: "Using python FastAPI and SSE to create a one way communication from the server to the client."

    }
]

const Projects = () => {
    return (
        <section className={styles.sectionWrapper} id="projects">
            <div className={styles.sectionHeader}>
                <p className={styles.subtitle}>Top Codebases</p>
                <h2 className={styles.title}>Selected Projects</h2>

            </div>

            <div className={styles.container}>
                {Raw_Data.map((item, idx) => {
                    return (
                        <div className={styles.card} key={idx}>
                            <div className={styles.browserHeader}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>

                            <div className={styles.imageContainer}>
                                <img src={item.img} className={styles.Img_Items} alt={item.title} />
                            </div>

                            <div className={styles.cardContent}>
                                <h3>{item.title}</h3>
                                <p>{item.Bio}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;