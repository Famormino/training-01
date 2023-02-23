import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/MainHeader/Navbar";

const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState();

    const localStorageInfo = localStorage.getItem('loggedIn')
    
    useEffect(() => {
        if(localStorageInfo === '1'){
            setIsLogged(true)
        }
    }, [])
    const loginHandler = (email) => {
        localStorage.setItem('loggedIn', '1')
        setIsLogged(true);
        setUserName(email);
    };

    const logoutHandler = () => {
        setIsLogged(false);
        localStorage.removeItem('loggedIn')
    };

    return (
        <React.Fragment>
            <Navbar onLogout={logoutHandler} loggedIn={isLogged} />
            <main>
                {!isLogged ? (
                    <Login onLogin={loginHandler} />
                ) : (
                    <Home onLogout={logoutHandler} user={userName} />
                )}
            </main>
        </React.Fragment>
    );
};

export default App;
