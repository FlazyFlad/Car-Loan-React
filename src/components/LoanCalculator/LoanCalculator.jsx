import React, {useState} from 'react';
import './LoanCalculator.css'
import CarCost from "./CarCost";
import TitleText from "./TitleText";
import InitialPayment from "./InitialPayment";

const LoanCalculator = () => {
    const [carValue, setCarValue] = useState(12000000);

    const formatNumber = (value) => {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + " M ₮";
        }
        return value.toString();
    }

    const handleCarCostChange = (event) => {
        const newValue = Number(event.target.value.replace(/,/g, ''));
        if (newValue >= 0 && newValue <= 50000000) {
            setCarValue(newValue);
        }
    };

    const separateThousands = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className="calculator-container">
            <TitleText
                titleText="Car Loan Calculator"
                subTitleText="Calculate your monthly car repayments as well as total payment and total interest based on vehicle price."
            />
            <div className="calculator flex gap-8 flex-row md:flex-row mt-12">
                <CarCost
                    value={separateThousands(carValue)}
                    onChange={(e) => handleCarCostChange(e)}
                    circValue={carValue}
                    circOnchange={(value) => setCarValue(value)}
                    formatNumber={formatNumber}
                />
                <InitialPayment />
            </div>
        </div>
    );
}

export default LoanCalculator;
