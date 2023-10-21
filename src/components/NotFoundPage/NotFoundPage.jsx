import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <>
        
        <div class="notfound-bg">
            <div class="not-found-container">
                <h1>Looks like you're lost</h1>
                <p>The page you are looking for is not available!</p>
                <Link to="/" class="cta-button">Go to Home</Link>
            </div>
        </div>

        </>
    );
}

export default NotFoundPage;
