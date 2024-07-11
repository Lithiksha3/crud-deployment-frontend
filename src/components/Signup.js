import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import UserLogo2 from '../assets/user-add-svgrepo-com.svg'

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = { name, password };

        Axios.post("https://crud-deployment-backend-3opd.onrender.com/userRoute/create-user", userData)
            .then((res) => {
                if (res.status === 200) {
                    alert("Signup successful!");
                    navigate("/create-event");
                } else {
                    alert("Signup failed. Please try again.");
                }
            })
            .catch((err) => {
                alert("Signup failed. Please try again.");
            });
    };

    return (
        <div className="mt-4 fs-4" style={{ maxWidth: "40%", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
                <img src={UserLogo2 } alt="" className="user-logo"/>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Enter Username" 
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Enter Password" 
                    required
                />
                <button type="submit" className="btn btn-primary d-block mx-auto my-3 fs-4">
                    Sign Up
                </button>
            </form>
            <p className="text-center mt-2 text-light fs-5">
                Alreeady have an account? <Link to="/signin" className="link-tag">Sign In here</Link>
            </p>
        </div>
    );
}