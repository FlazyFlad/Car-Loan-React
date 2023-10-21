import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
    <header>
        <div class="container">
            <div class="logo">
                <Link to="/"> <i class="fa fa-car" aria-hidden="true"></i> Your Car <span>Loan</span></Link>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    
                    <li>
                        <Link to="/loan-calculator">Loan Calculator</Link>
                    </li>
                    
                    {/* <li><a href="/">How It Works</a></li>
                    <li><a href="/">Resources</a></li> */}


                    <li>
                        <Link to="about-us">About Us</Link>
                    </li>

                    {/* <li>
                        <Link to="/login">
                        Log In
                        </Link>
                    </li> */}

                    <li>
                        <Link class="act-a-link" to="/register">
                            <button class="act-link">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
        </>
    );
}

export default Header;
