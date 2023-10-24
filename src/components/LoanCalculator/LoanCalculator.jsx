import React from 'react';
import './LoanCalculator.css'
import CarCost from "./CarCost";
import TitleText from "./TitleText";

const LoanCalculator = () => {
    return (
        <div className="calculator-container">
            <TitleText
                titleText="Car Loan Calculator"
                subTitleText="Calculate your monthly car repayments as well as total payment and total interest based on vehicle price."
            />
            <div className="calculator flex gap-8 flex-row md:flex-row mt-12">
                <CarCost />
                <CarCost />
            </div>
        </div>
    );
}

export default LoanCalculator;
