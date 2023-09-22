import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css"; // Import css modules stylesheet as styles
import FirebaseAuthService from "../../services/FirebaseAuthService";
import { auth } from "../../services/FirebaseConfig";
export default function Header() {
    //console.log(auth?.currentUser?.email);
    //console.log(auth?.currentUser?.displayName);

    const navigate = useNavigate();
    const buttons = [
        {
            href: "/",
            name: "My Shifts",
        },
        {
            href: "/addShift",
            name: "Add A Shift",
        },
        {
            href: "/editProfile",
            name: "Edit Profile",
        },
        {
            href: "/editshift",
            name: "Edit Shift",
        },
    ];
    const handleLogout = () => {
        FirebaseAuthService.logout();
        navigate("/login");
    };
    function handleHref(href) {
        //  alert(href);
        navigate(href);
    }

    return (
        <div className={styles.container}>
            <div className={styles.NavbarButtons}>
                {buttons.map((button) => (
                    <div>
                        <button
                            key={button.href}
                            variant="text"
                            onClick={() => handleHref(button.href)}
                            className={styles.btn}
                        >
                            {button.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.RightSide}>
                <p>
                    Welcome{" "}
                    {auth?.currentUser ? auth?.currentUser.email : " guess"}
                </p>
                <button onClick={handleLogout} className={styles.btnLogout}>
                    {auth?.currentUser ? "logout" : " login"}
                </button>
            </div>
        </div>
    );
}
