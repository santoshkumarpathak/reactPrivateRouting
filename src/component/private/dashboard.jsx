import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <div>dashboard</div>
            <h3>Admin login required</h3>

            <nav>
                {/* <Link to="/landing">Landing</Link> */}
                <Link to="/uploads">Uploads</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/manager">Manager</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </div>
    )
}

export const Admin = () => {
    return (
        <div>
            <div>Admin </div>
            <h3>Admin login required</h3>
            <nav>
                {/* <Link to="/landing">Landing</Link> */}
                <Link to="/uploads">Uploads</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/manager">Manager</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </div>
    )
}
export const Manager = () => {
    return (
        <div>
            <div>Admin Manager</div>
            <h3>Admin login required</h3>

            <nav>
                {/* <Link to="/landing">Landing</Link> */}
                <Link to="/uploads">Uploads</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/manager">Manager</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </div>
    )
}