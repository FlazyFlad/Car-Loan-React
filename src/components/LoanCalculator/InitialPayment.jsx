import React, { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

function InitialPayment() {
    const [paymentValue, setPaymentValue] = useState(120000);

    const formatNumber = (value) => {
        if (value >= 1000) {
            return (value / 1000).toFixed(1) + " M ₮";
        }
        return value.toString() + " ₮";
    }

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value.replace(/,/g, ''));
        if (newValue >= 0 && newValue <= 500000) {
            setPaymentValue(newValue);
        }
    };

    const separateThousands = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="car-cost">
            <div className="slider-input-wrapper">
                <div className="slider-input-labels">
                    <h1 className='text-red font-bold text-2xl'>Initial Payment</h1>
                    <p className='text-gray-white text-xs my-4'>Minimum 10% of the cost</p>
                    <input
                        type="text"
                        value={separateThousands(paymentValue)}
                        onChange={handleInputChange}
                        max="500000"
                        min="0"
                        className='text-black text-sm my-4 w-60 h-12 rounded-md px-2 py-2
                        focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400'                    />
                </div>
                <CircularSlider
                    width={200}
                    value={paymentValue}
                    onChange={(value) => setPaymentValue(value)}
                    max={500000}
                    label={formatNumber(paymentValue)}
                    labelColor="#005a58"
                    knobColor="#FFC107"
                    progressColorFrom="#FFC107"
                    progressColorTo="#64045c"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    dataIndex={10}
                    className='text-sm'
                />
            </div>
        </div>
    );
}

export default InitialPayment;
