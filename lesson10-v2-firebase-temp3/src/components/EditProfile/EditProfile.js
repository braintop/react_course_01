import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./EditProfile.module.css";
import { showNotification } from "../../utils/notifications";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function EditProfile() {
    //const [user, setUser] = useContext(UserContext);

    useEffect(() => {}, []);

    //const updateUser = async (data) => {};

    return (
        <>
            <Header selected={"Edit Profile"} />
            <div>
                <div className={styles.title}>Edit Profile</div>
            </div>
        </>
    );
}
