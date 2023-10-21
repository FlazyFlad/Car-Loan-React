import React from 'react';
import './LoanCalculator.css'

const LoanCalculator = () => {
    return (
        <>
        
        <div class="calculator-container">
                <h2>Car Loan Calculator</h2>
                    <div class="input-group">
                        <label for="loan-amount">   <i class="fa fa-usd" aria-hidden="true"></i> Loan Amount:</label>
                        <input type="number" id="loan-amount" placeholder="Enter loan amount" />
                    </div>
                    <div class="input-group">
                        <label for="interest-rate">   <i class="fa fa-percent" aria-hidden="true"></i> Interest Rate:</label>
                        <input type="number" id="interest-rate" placeholder="Enter interest rate" />
                    </div>
                    <div class="input-group">
                        <label for="years"> <i class="fa fa-calendar" aria-hidden="true"></i> Years to Repay:</label>
                        <input type="number" id="years" placeholder="Enter number of years" />
                    </div>
                <button onclick="calculateLoan()">Calculate</button>
                <div class="output">
                    <h3>Results</h3>
                    <p> Monthly Payment: <span id="monthly-payment"></span></p>
                    <p>Total Payment: <span id="total-payment"></span></p>
                    <p>Total Interest: <span id="total-interest"></span></p>
                </div>
            </div>
        </>
    );
}

export default LoanCalculator;
