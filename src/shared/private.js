import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const location = useLocation()
    const admin = localStorage.getItem('Admin_Token');
    console.log(location,admin)

    // const authed = isauth() // isauth() returns true or false based on localStorage

    return admin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute