import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AddShift.module.css";
import { showNotification } from "../../util/notification";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";
export default function AddShift({ title }) {
    const Form = useRef();
    const navigate = useNavigate();
    const shiftRef = collection(db, "shifts");
    function test() {
        const form = Form.current; // current belongs to  react
        alert(form["date"].value);
    }
    async function addShift(e) {
        e.preventDefault();
        //add to firebase
        const form = Form.current; // current belongs to  react
        console.log(form);
        const obj = {
            date: form["date"].value,
            startTime: form["startTime"].value,
            endTime: form["endTime"].value,
            wage: form["wage"].value,
            shiftName: form["shiftName"].value,
            workplace: form["workplace"].value,
        };
        console.log(obj);

        await addDoc(shiftRef, obj);
        showNotification("success", "The shift added successfully");
        navigate("/");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = Form.current;
        const nameExist = false; // await checkShiftNameExist();
        if (form["date"].value === "") {
            showNotification("error", "Field the date");
            return;
        } else if (form["startTime"].value === "") {
            showNotification("error", "Field the start time");
            return;
        } else if (form["endTime"].value === "") {
            showNotification("error", "Field the end time");
            return;
        } else if (form["wage"].value === "" || form["wage"].value < 0) {
            showNotification("error", "Field the wage");
            return;
        } else if (form["workplace"] === "") {
            showNotification("error", "Field the workplace");
            return;
        } else if (form["shiftName"].value === "") {
            showNotification("error", "Field the shift name");
            return;
        } else if (title === "Add a shift" && nameExist) {
            showNotification(
                "error",
                "This name already exist, choose a new name"
            );
            return;
        } else {
            if (title === "Add a shift") {
                addShift(e);
            }
            //else if (title === "Edit Shift") updateShift();
        }
    };

    return (
        <div className={styles.card}>
            <form className={styles.form} ref={Form}>
                <h1 className={styles.title}>Add a shift</h1>
                <div className={styles.row}>
                    <input className={styles.input} type="date" name="date" />
                    <input
                        className={styles.input}
                        type="time"
                        name="startTime"
                    />
                    <input
                        className={styles.input}
                        type="time"
                        name="endTime"
                    />
                </div>
                <div className={styles.row}>
                    <input className={styles.input} type="number" name="wage" />
                    <select name="workplace">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    <input
                        className={styles.input}
                        type="text"
                        name="shiftName"
                    />
                </div>

                <button className={styles.btn} onClick={handleSubmit}>
                    save
                </button>
            </form>
        </div>
    );
}
