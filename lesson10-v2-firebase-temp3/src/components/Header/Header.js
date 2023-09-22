import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import styles from "./Header.module.css"; // Import css modules stylesheet as styles
import { UserContext } from "../../context/UserContext";
import FirebaseAuthService from "../../services/FirebaseAuthService";

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    const [selectedButton, setSelectedButton] = useState("My Shifts"); // Initialize with the default selected button

    const navigate = useNavigate();
    const buttons = [
        {
            href: "/myShifts",
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
    ];
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        if (buttonName === "My Shifts") {
            navigate("/myShifts");
        }
        if (buttonName === "Add A Shift") {
            navigate("/addShift");
        }
        if (buttonName === "Edit Profile") {
            alert("hello");
            navigate("/editProfile");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        FirebaseAuthService.logout();
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <div className={styles.NavbarButtons}>
                {buttons.map((button) => (
                    <div key={button.href}>
                        <button
                            variant="text"
                            href={button.href}
                            onClick={() => handleButtonClick(button.name)}
                            className={
                                button.name === selectedButton
                                    ? styles.btn
                                    : styles.selectedBtn
                            }
                        >
                            {button.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.RightSide}>
                <p>Welcome, {user?.email}</p>
                <button onClick={handleLogout} className={styles.btnLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
