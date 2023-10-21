import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        
        <div class="login-container">
            <div class="form-container">
                <h2>Login to Your Account</h2>
                <form id="login-form" class="form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" class="cta-button">Login</button>
                    <p>Don't have an account?
                        <Link style={{marginLeft: '5px'}} to="/register">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>

        </>
    );
}

export default Login;
