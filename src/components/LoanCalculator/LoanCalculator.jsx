import React, { useState, useMemo } from 'react';
import './LoanCalculator.css';
import CarCost from "./CarCost";
import TitleText from "./TitleText";
import InitialPayment from "./InitialPayment";
import LoanTermSelector from "./LoanTermSelector";
import CarChoice from "./CarChoice";
import RateAndLoan from "./RateAndLoad";
import PaymentMethod from "./PaymentMethod";
import CarLoanEstimate from "./CarLoanEstimate";
import ApprovalButton from "./ApprovalButton";

const LoanCalculator = () => {
    const [carValue, setCarValue] = useState(12000000);
    const [inputValue, setInputValue] = useState(carValue.toString());
    const [selectedTerm, setSelectedTerm] = useState(4);
    const [selectedCar, setSelectedCar] = useState('new');
    const [selectedMethod, setSelectedMethod] = useState('Equal Parts');


    const separateThousands = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const formattedCarValue = useMemo(() => separateThousands(carValue), [carValue]);
    const initialPaymentValue = useMemo(() => separateThousands(carValue * 0.1), [carValue]);

    const formatNumber = (value) => {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + " M ₮";
        }
        return value % 1 === 0 ? value + " " : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₮";
    }

    const handleCarCostChange = (event) => {
        setInputValue(event.target.value);
        const newValue = Number(event.target.value.replace(/,/g, '').replace(/\s+/g, ''));
        if (newValue >= 0 && newValue <= 50000000) {
            setCarValue(newValue);
        }
    };


    return (
        <div className="calculator-container">
            <TitleText
                titleText="Car Loan Calculator"
                subTitleText="Calculate your monthly car repayments as well as total payment and total interest based on vehicle price."
            />
            <div className="calculator flex gap-8 flex-row md:flex-row mt-12">
                <CarCost
                    value={formattedCarValue}
                    onChange={(e) => handleCarCostChange(e)}
                    circValue={carValue}
                    circOnchange={(value) => setCarValue(value)}
                    formatNumber={formatNumber}
                />
                <InitialPayment
                    paymentValue={initialPaymentValue}
                    handlePaymentChange={(e) => {
                        const newPaymentValue = Number(e.target.value.replace(/,/g, '').replace(/\s+/g, ''));
                        setCarValue(newPaymentValue / 0.1);
                    }}
                    circleValue={formatNumber(carValue * 0.1)}
                    circleOnChange={(value) => setCarValue(value / 0.1)}
                    formatNumber={formatNumber}
                />
            </div>
            <div className="items-center flex gap-8 flex-row md:flex-row mt-2 justify-between">
                <div className="flex flex-col w-full">
                    <LoanTermSelector
                        setSelectedTerm={setSelectedTerm}
                        selectedTerm={selectedTerm}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <CarChoice
                        selectedCar={selectedCar}
                        setSelectedCar={setSelectedCar}
                    />
                    <RateAndLoan isUsed={false} />
                </div>
            </div>

            <div className="flex justify-center gap-8 items-start mt-2">
                <div className="flex flex-col gap-2 w-full">
                    <PaymentMethod
                        selectedMethod={selectedMethod}
                        setSelectedMethod={setSelectedMethod}
                    />
                    <ApprovalButton />
                </div>
                <div className="w-full">
                    <CarLoanEstimate />
                </div>
            </div>
        </div>
    );
}

export default LoanCalculator;
