import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } from "./navbarstyle";
import Userimgicon from "../userimgicon";
// import Admininventory from "./components/admininventory/admininventory";
// import Checkout from "./components/checkout/checkout";
// import Landing from "./components/landingpage/landing";
// import Login from "./components/loginpage/loginpage";
// import Makeaccount from "./components/makeaccount/makeaccount";
// import Navbar from "./components/navbarcomponent/navbar";
// import Productview from "./components/productview/productview";
const Navbar = () => {
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        return setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return (
        <>
            <Nav>
                <img
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <NavMenu>
                    <NavLink to="/Login">Login</NavLink>
                    <NavLink to="/Landing">Landing</NavLink>
                    <NavLink to="/Productview">Product View</NavLink>
                    <NavLink to="/Makeaccount">Account</NavLink>
                    <NavLink to="/Checkout">Checkout</NavLink>
                    <NavLink to="/Admininventory">Admin inventory</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
