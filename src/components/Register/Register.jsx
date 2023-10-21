import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div class="register-container">
                <div class="form-container">
                    <h2>Register for Your Car Loan</h2>
                    <form id="register-form" class="form">
                        <input type="text" placeholder="UserName" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                        <button type="submit" class="cta-button">Register</button>
                        <p>Already have an account? 

                            <Link style={{marginLeft: '5px'}} to="/login">
                                Login
                            </Link>

                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
