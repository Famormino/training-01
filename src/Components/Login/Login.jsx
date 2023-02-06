import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [password, setPassword] = useState("");
    const [passwordIsValid, setPasswordIsvalid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes("@") && password.trim().length > 6
        );
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);

        setFormIsValid(event.target.value.trim().length > 6 && email.includes("@"));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email, password, formIsValid);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={onEmailChangeHandler}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={onPasswordChangeHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" disabled={!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
