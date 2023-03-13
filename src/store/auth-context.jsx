import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLogged: false,
    logOutHandler: () => {},
    logInHandler: (email,password) => {},
});

export const AuthLogin = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    const localStorageInfo = localStorage.getItem("loggedIn");

    useEffect(() => {
        if (localStorageInfo === "1") {
            setIsLogged(true);
        }
    }, []);

    const logInHandler = () => {
        localStorage.setItem("loggedIn", "1");
        setIsLogged(true);
    };
    const logOutHandler = () => {
        localStorage.removeItem("loggedIn");
        setIsLogged(false);
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

export default AuthContext;
