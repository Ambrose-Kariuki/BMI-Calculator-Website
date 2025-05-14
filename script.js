document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculate-btn');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');

    // Calculate BMI when button is clicked
    calculateBtn.addEventListener('click', calculateBMI);
    
    // Also calculate when Enter is pressed in either input field
    weightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });
    
    heightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        
        // Validate inputs
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid positive numbers for weight and height');
            return;
        }
        
        // Calculate BMI
        const bmi = weight / (height * height);
        const roundedBMI = Math.round(bmi * 10) / 10;
        
        // Display result
        bmiValue.textContent = roundedBMI;
        
        // Determine category
        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        
        bmiCategory.textContent = category;
    }
    
    // Calculate initial BMI on page load
    calculateBMI();
});