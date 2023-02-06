import React from "react";
import classes from "./Navbar.module.css";
import Navigation from "./Navigations";

const Navbar = () => {
    return (
            <header className={classes["main-header"]}>
                <h3>Please <u>login</u></h3>
                <Navigation />
            </header>
    );
};

export default Navbar;
