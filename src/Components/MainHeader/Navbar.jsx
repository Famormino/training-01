import React from "react";
import classes from "./Navbar.module.css";
import Navigation from "./Navigations";

const Navbar = (props) => {
    return (
        <header className={classes["main-header"]}>
            {!props.loggedIn ? (
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
