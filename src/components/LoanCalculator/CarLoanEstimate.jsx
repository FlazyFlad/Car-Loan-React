import React, { useState } from 'react';

const CarLoanEstimate = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(32978);
    const [interestRate, setInterestRate] = useState(27);
    const [fullRate, setFullRate] = useState(30.6);
    const [otherBanksPayment, setOtherBanksPayment] = useState(38330);

    return (
        <div className="bg-gray-800 rounded-lg w-full mx-auto p-4">
            <div className="text-white font-bold text-3xl mb-2">{monthlyPayment} ₮</div>
            <div className="text-white text-xs mb-4">Preliminary monthly payment*</div>
            <div className="text-white font-bold text-2xl mb-4">from {interestRate}% GSV {fullRate}%</div>
            <div className="text-white text-xs mb-4">
                *For a final calculation, you need to enter information about the purchased car
            </div>
            <hr className="border-gray-600 mb-4" />
            <div className="text-white">In other companies under the same conditions</div>
            <div className="text-red-500 text-3xl">{otherBanksPayment} ₮</div>
        </div>
    );
}

export default CarLoanEstimate;
