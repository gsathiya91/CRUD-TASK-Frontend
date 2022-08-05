import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function RegisterPage() {
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
            const { data } = await axios.post("https://movies-app-crud-backend.herokuapp.com/register", {
                ...values,
            }, { withCredentials: true, });

            if (data) {
                if (data.errors) {
                    const { userName, email, password } = data.errors;
                    if (userName) generateError(userName)
                    else if (email) generateError(email);
                    else if (password) generateError(password);
                } else {
                    navigate("/login")
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h2 className="register">Register</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Enter your Name"
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                    />
                </div>
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
                <span className="text">Already Registered! <Link to="/login">Login</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default RegisterPage;