import React, { useRef } from "react";
import styles from "./addShift.module.css";
import { showNotification } from "../../utils/notifications";
import { addDoc, getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";

import { auth } from "../../services/FirebaseConfig";
export default function AddShift({ title }) {
    const Form = useRef();
    console.log(auth?.currentUser?.uid);
    const usersRef = collection(db, "users");

    const addShift = async (e) => {
        e.preventDefault();
        try {
            const form = Form.current;
            console.log("============");
            console.log(form["date"].value);
            console.log(form["startTime"].value);
            console.log(form["endTime"].value);
            console.log(form["wage"].value);
            console.log(form["comments"].value);
            console.log(form["workplace"].value);
            console.log(auth?.currentUser?.uid);
            await addDoc(usersRef, {
                date: form["date"].value,
                startTime: form["startTime"].value,
                endTime: form["endTime"].value,
                hourlyWage: form["wage"].value,
                comments: form["comments"].value,
                name: form["shiftName"].value,
                workplace: form["workplace"].value,
                // userId: auth?.currentUser?.uid,
            });
            showNotification("success", "The shift added successfully");
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);
        } catch (err) {
            showNotification(
                "error",
                "Couldn't save the shift. Try again later..."
            );
        }
    };
    const checkShiftNameExist = async () => {
        const data1 = await getDocs(
            query(
                usersRef,
                where("name", "==", Form.current["shiftName"].value)
            )
        );
        if (data1.empty) return false;
        else return true;
    };
    function updateShift() {}
    const handleSubmit = async (e) => {
        const form = Form.current;
        const nameExist = false; // await checkShiftNameExist();
        alert("a");
        if (form["date"].value === "") {
            showNotification("error", "Field the date");
            alert("c");

            return;
        } else if (form["startTime"].value === "") {
            showNotification("error", "Field the start time");
            alert("d");

            return;
        } else if (form["endTime"].value === "") {
            showNotification("error", "Field the end time");
            alert("e");

            return;
        } else if (form["wage"].value === "" || form["wage"].value < 0) {
            alert("f");
            showNotification("error", "Field the wage");
            return;
        } else if (form["workplace"] === "") {
            alert("g");
            showNotification("error", "Field the workplace");
            return;
        } else if (form["shiftName"].value === "") {
            alert("h");

            showNotification("error", "Field the shift name");
            return;
        } else if (title === "Add a shift" && nameExist) {
            alert("i");
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
            <h1 className={styles.title}>addShift</h1>
            <form ref={Form} className={styles.form}>
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
                    <select className={styles.input} name="workplace">
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

                <input className={styles.comment} type="text" name="comments" />
                <button className={styles.submit} onClick={handleSubmit}>
                    submit
                </button>
            </form>
        </div>
    );
}
