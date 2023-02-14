import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = (props) => {
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

        setFormIsValid(
            event.target.value.trim().length > 6 && email.includes("@")
        );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(email.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsvalid(password.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(email, password)
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailIsValid === false ? classes.invalid : ""
                    } `}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={onEmailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={onPasswordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
