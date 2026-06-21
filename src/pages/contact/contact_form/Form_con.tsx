import React, { useState } from 'react';
import styles from './Form_con.module.css';

const Form_con = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xpqgagkl", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.container}>
                <div style={{ textAlign: 'center', color: '#1a3f37' }}>
                    <h2 style={{ marginBottom: '0.5rem', fontWeight: 800 }}>Message Sent!</h2>
                    <p style={{ color: '#475569' }}>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    required
                />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>

                {error && (
                    <p style={{ color: '#dc2626', fontSize: '0.87rem', margin: '0' }}>
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
};

export default Form_con;