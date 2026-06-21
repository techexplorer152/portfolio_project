import styles from './Form_con.module.css';

const Form_con = () => {
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => e.preventDefault()}>
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

                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Form_con;