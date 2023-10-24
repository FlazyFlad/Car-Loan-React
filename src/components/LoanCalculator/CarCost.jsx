import React, { useState } from 'react';
import './CarCost.css';
import CircularSlider from '@fseehawer/react-circular-slider';

function CarCost() {
    const [carValue, setCarValue] = useState(12000000);

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value);
        if (newValue >= 0 && newValue <= 50000000) {
            setCarValue(newValue);
        }
    };

    return (
        <div className="car-cost">
            <div className="slider-input-wrapper">
                <div className="slider-input-labels">
                    <h1 className='text-red font-bold text-2xl'>Car Cost</h1>
                    <p className='text-gray-white text-xs my-4'>Maximum amount 50,000,000 ₮</p>
                    <input
                        type="number"
                        value={carValue}
                        onChange={handleInputChange}
                        max="50000000"
                        min="0"
                        className='text-black text-sm my-4'
                    />
                </div>
                <CircularSlider
                    width={200}
                    value={carValue}
                    onChange={(value) => setCarValue(value)}
                    max={50000000}
                    label="₮"
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

export default CarCost;
