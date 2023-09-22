import { createContext, useContext, useEffect, useState } from "react";
import FirebaseAuthService from "../services/FirebaseAuthService";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    FirebaseAuthService.subscribeToAuthChanges(setUser);

    // useEffect(() => {
    //     console.log("======");
    //     console.log(user);
    // }, []);

    return (
        <UserContext.Provider
            value={{ user, setUser, isLoading, setIsLoading }}
        >
            {children}
        </UserContext.Provider>
    );
}
function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("error oocered");
    }
    return context;
}

export { UserContext, useUser };
