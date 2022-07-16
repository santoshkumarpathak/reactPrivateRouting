import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
    const location = useLocation()
    const data = localStorage.getItem('Token');
    console.log( location, data)
    // const chil = children
    // return data ? chil : <Navigate to="/login" />
    return data ? <Outlet /> : <Navigate to="/login" />
};

export default PublicRoute;