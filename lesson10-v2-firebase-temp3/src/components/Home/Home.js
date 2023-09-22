import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
}
