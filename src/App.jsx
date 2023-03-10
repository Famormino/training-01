import React, { useContext } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/MainHeader/Navbar";
import AuthContext from "./store/auth-context";

const App = () => {
    const ctx = useContext(AuthContext);
    console.log(ctx.isLogged);
    return (
        <React.Fragment>
            <Navbar onLogout={ctx.logout} />
            <main>
                {!ctx.isLogged ? (
                    <Login  />
                ) : (
                    <Home  />
                )}
            </main>
        </React.Fragment>
    );
};

export default App;
