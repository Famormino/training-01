import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { AuthLogin } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthLogin>
        <App />
    </AuthLogin>
);
