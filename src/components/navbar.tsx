import React from 'react';
import {Link, NavLink} from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav>
                <h1>PIT</h1>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </nav>
        </>
    );
}

export default Navbar;