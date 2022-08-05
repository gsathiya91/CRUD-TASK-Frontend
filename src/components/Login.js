import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
    const [values, setValues] = useState({
        userName: "",
        email: "",
        password: ""
    })
    const generateError = (err) => toast.error(err);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://movies-app-crud-backend.herokuapp.com/login", {
                ...values,
            }, { withCredentials: true, });

            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;                   
                     if (email) generateError(email);
                    else if (password) generateError(password);
                } else {
                    navigate("/")
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="container">
            <h2 className="register">Login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-info">Submit</button><br />
                <span className="text">Not yet Registered! <Link to="/register">Register</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default LoginPage;