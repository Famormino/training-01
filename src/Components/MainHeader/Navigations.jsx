import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLogged && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLogged && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLogged && (
                    <li>
                        <button onClick={ctx.logout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
