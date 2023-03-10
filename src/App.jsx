import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/MainHeader/Navbar";
import AuthContext from "./store/auth-context";

const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState();

    const localStorageInfo = localStorage.getItem("loggedIn");

    useEffect(() => {
        if (localStorageInfo === "1") {
            setIsLogged(true);
        }
    }, []);
    const loginHandler = (email) => {
        localStorage.setItem("loggedIn", "1");
        setIsLogged(true);
        setUserName(email);
    };

    const logoutHandler = () => {
        setIsLogged(false);
        localStorage.removeItem("loggedIn");
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLogged,
                loggedOut: logoutHandler,
            }}
        >
            <Navbar onLogout={logoutHandler} />
            <main>
                {!isLogged ? (
                    <Login onLogin={loginHandler} />
                ) : (
                    <Home onLogout={logoutHandler} user={userName} />
                )}
            </main>
        </AuthContext.Provider>
    );
};

export default App;
