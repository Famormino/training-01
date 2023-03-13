import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navbar.module.css";
import Navigation from "./Navigations";

const Navbar = () => {
    const ctx = useContext(AuthContext)
    return (
        <header className={classes["main-header"]}>
            {!ctx.isLogged ? (
                <h3>
                    Please <u>login</u>
                </h3>
            ) : (
                <h3>Logged</h3>
            )}
            <Navigation />
        </header>
    );
};

export default Navbar;
