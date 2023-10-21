import React from 'react';
import './AboutUs.css'

import FirstImage from './3.png';
import SecondImage from './2.png';

const AboutUs = () => {
    return (
        <>
        
        <div class="about-section">
            <div class="about-content">
                <div class="left">
                    <img src={FirstImage} alt="Some 1" />
                </div>
                <div class="right">
                    <h2>Section 1 Header</h2>
                    <p>Text describing the first section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <br />

                    <a href="/" class="cta-button">Learn More</a>
                </div>
            </div>
        </div>

        <div class="about-section reverse">
            <div class="about-content">
                <div class="right">
                    <img src={SecondImage} alt="Some 2" />
                </div>
                <div class="right">
                    <h2>Section 2 Header</h2>
                    <p>Text describing the second section. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <br />

                    <a href="/" class="cta-button">Discover More</a>
                </div>
            </div>
        </div>

        </>
    );
}

export default AboutUs;
