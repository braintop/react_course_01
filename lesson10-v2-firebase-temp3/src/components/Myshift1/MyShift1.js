import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./MyShift.module.css";
export default function MyShift1() {
    const tableColumns = [
        "Date",
        "Begging time",
        "End time",
        "Price per hour",
        "Place",
        "Total profit",
        "",
    ];
    const [shifts, setShifts] = useState([]);
    const [filteredShifts, setFilteredShifts] = useState([]);
    const [fetching, setFetching] = useState(true);

    //filter fields
    const [place, setPlace] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    function optionSelect(e) {
        console.log(e.target.value);
    }
    function fromDate(e) {
        console.log(e.target.value);
    }

    function toDate(e) {
        console.log(e.target.value);
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>My shifts</h1>
                <h3 className={styles.searchTitle}>Search by</h3>
                <div className={styles.searchContainer}>
                    <label>place:</label>
                    <select onChange={optionSelect} className={styles.options}>
                        <option value="All">All</option>
                        <option value="Ball">Ball</option>
                        <option value="Call">Call</option>
                    </select>
                    <label>Dates:from</label>
                    <input
                        onChange={fromDate}
                        type="date"
                        className={styles.dateInput}
                    />
                    <button className={styles.btnX}>X</button>
                    <label>Dates:to</label>
                    <input
                        onChange={toDate}
                        type="date"
                        className={styles.dateInput}
                    />
                    <button className={styles.btnX}>X</button>
                </div>
            </div>
        </div>
    );
}
