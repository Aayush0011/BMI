import { useState } from "react";
import "./BMICalculator.css";
export function BMICalculator() {
    const [weight, updateWeightValue] = useState("");
    const [height, updateHeightValue] = useState("");
    const [bmiValue, updateBMIValue] = useState(null);
    function calculateBMIValue() {
        console.log("button Clicked", weight, height);
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);

        const roundedOffBMIValue = bmiValue.toFixed(2);
        updateBMIValue(roundedOffBMIValue);
        console.log("BMI Value:", roundedOffBMIValue);

    }
    function handleWeightInputChange(e) {

        updateWeightValue(e.target.value);
    }
    function handleHeightInputChange(e) {
        updateHeightValue(e.target.value);
    }
    function displayBMIValue() {
        if (bmiValue !== null) {
            return <div>Your BMI Value is:{bmiValue}</div>;
        }
    }
    return (
        <div className="container  form-container">
            <div >
                <label className="me-4 mt-5">Weight in Kgs:</label>
                <input type="text" value={weight} onChange={handleWeightInputChange}>

                </input>
            </div>
            <div >
                <label className="me-4 mt-5">Height in cms:</label>

                <input type="text" value={height} onChange={handleHeightInputChange}>

                </input>
            </div>

            <button type="button" class="btn btn-primary mt-4" onClick={calculateBMIValue}>
                Calculate BMI
            </button>
            {displayBMIValue()}

        </div>
    );

}