import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/MainHeader/Navbar";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Login />
            </main>
        </React.Fragment>
    );
};

export default App;
