import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLogged: false,
    logOutHandler: () => {},
    logInHandler: () => {},
});

export default AuthContext;

export const AuthLogin = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    const localStorageInfo = localStorage.getItem("loggedIn");

    useEffect(() => {
        if (localStorageInfo === "1") {
            setIsLogged(true);
        }
    }, []);

    const logInHandler = () => {
        setIsLogged(true);
        localStorage.setItem("loggedIn", "1");
    };
    const logOutHandler = () => {
        setIsLogged(false);
        localStorage.removeItem("loggedIn");
    };

    return (
        <AuthContext.Provider
            value={{
                isLogged: isLogged,
                logout: logOutHandler,
                login: logInHandler,
            }}
        >
            {props.children};
        </AuthContext.Provider>
    );
};
