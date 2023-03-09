import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Home.module.css";

const Home = (props) => {
    return (
        <Card className={classes.home}>
            <p>Bienvenido {props.user}</p>
            <div>
                <Button onClick={props.onLogout}>Logout</Button>
            </div>
        </Card>
    );
};

export default Home;
