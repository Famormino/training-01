import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Home.module.css";

const Home = () => {
    const ctx = useContext(AuthContext)
    return (
        <Card className={classes.home}>
            <p>Bienvenido</p>
            <div>
                <Button onClick={ctx.onLogout}>Logout</Button>
            </div>
        </Card>
    );
};

export default Home;
