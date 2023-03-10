import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [password, setPassword] = useState("");
    const [passwordIsValid, setPasswordIsvalid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Validation");
            setFormIsValid(
                email.includes("@epe.santafe.gov.ar") &&
                    password.trim().length > 6
            );
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [email, password]);

    const ctx = useContext(AuthContext);

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(email.includes("@epe.santafe.gov.ar"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsvalid(password.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.login(email, password);
    };

    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "60px",
                    color: "#0e005f",
                }}
            >
                E P E
            </h1>
            <Card className={classes.login}>
                <form onSubmit={submitHandler}>
                    <Input
                        id="email"
                        label="E-Mail"
                        type="email"
                        isValid={emailIsValid}
                        value={email}
                        onChange={onEmailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        isValid={passwordIsValid}
                        value={password}
                        onChange={onPasswordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                    <div className={classes.actions}>
                        <Button type="submit" disabled={!formIsValid}>
                            Login
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default Login;
