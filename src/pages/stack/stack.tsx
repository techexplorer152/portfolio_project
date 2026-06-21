import styles from './stack.module.css';
import C_sharp_img from './img/csharp.png';
import JS_img from './img/JS logo.png';
import TS_img from './img/typescript.png';
import Java_img from './img/Java.png';
import PY_img from './img/python.png';
import C_plusplus from './img/c++.png';

import React_img from './img/React logo.png';
import FastAPI_img from './img/FastAPI.png';
import Node_img from './img/node.js.png';
import Spring_img from './img/spring boot.png';

import Git_img from './img/git-144.png';
import Github_img from './img/github.png';
import Mongo_img from './img/MongoDB.png';
import Post_SQL from './img/postgresql.png';
import Docker_img from './img/Docker.png';

const Stack = () => {
    return (
        <div className={styles.container} id="stack">
            <div className={styles.Lan_con}>
                <h1>Languages</h1>
                <div className={styles.lan}>
                    <img src={C_sharp_img} alt="C#" />
                    <img src={TS_img} alt="TypeScript" />
                    <img src={JS_img} alt="JavaScript" />
                    <img src={Java_img} alt="Java" />
                    <img src={PY_img} alt="Python" />
                    <img src={C_plusplus} alt="C++" />
                </div>
            </div>

            <div className={styles.Lan_con}>
                <h1>Frameworks</h1>
                <div className={styles.lan}>
                    <img src={Spring_img} alt="Spring Boot" />
                    <img src={React_img} alt="React" />
                    <img src={FastAPI_img} alt="FastAPI" />
                    <img src={Node_img} alt="Node.js" />
                </div>
            </div>

            <div className={styles.Lan_con}>
                <h1>Tools & DBs</h1>
                <div className={styles.lan}>
                    <img src={Docker_img} alt="Docker" />
                    <img src={Git_img} alt="Git" />
                    <img src={Github_img} alt="GitHub" />
                    <img src={Mongo_img} alt="MongoDB" />
                    <img src={Post_SQL} alt="PostgreSQL" />
                </div>
            </div>
        </div>
    );
};

export default Stack;