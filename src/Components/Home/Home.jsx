import React from "react";
import classes from "./Home.module.css"

const Home = (props) => {
    return <h1 className={classes.home}>Bienvenido {props.user}</h1>;
};

export default Home;
