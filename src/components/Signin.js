import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import UserLogo from '../assets/user-circle-svgrepo-com.svg';
import { useAuth } from '../AuthContext';

export default function Signin() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { name, password };

        try {
            const res = await Axios.post("https://crud-deployment-backend-3opd.onrender.com/userRoute/signin", userData);

            if (res.status === 200) {
                alert("Sign In SUCCESSFUL!!!");
                login();
                
                localStorage.setItem('token', res.data.token);

                navigate("/create-event");
            } else {
                alert("User NOT FOUND!! Redirecting to sign up.");
                navigate("/create-user");
            }
        } catch (err) {
            alert("Sign In FAILED!! Please try again!!");
        }
    };

    return (
        <div className="mt-4" style={{ maxWidth: "40%", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
                <img src={UserLogo} alt="" className="user-logo"/>
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
                    Sign In
                </button>
            </form>
            <p className="text-center mt-2 text-light fs-5">
                Don't have an account? <Link to="/create-user" className="link-tag">Sign Up here</Link>
            </p>
        </div>
    );
}
