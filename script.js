document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById("textInput"); 
    const rangeInput = document.getElementById("rangeInput"); 
    const tip_percent = document.getElementById("tip_percent"); 
    const tip_amount = document.getElementById("tip_amount"); 
    const total_bill = document.getElementById("total_bill"); 
    const form = document.querySelector(".label");

    // Function to update fields
    function updateFields(billTotalValue, tipSliderValue) {
        tip_percent.textContent = tipSliderValue; 

        //check if the value is a number if not provide alert
        if (isNaN(billTotalValue)) {
            alert("Please enter a valid number for Bill Total.");
            return;
        }

        // Math to find out tip amount value and total bill value
        const tip_amountValue = (billTotalValue * tipSliderValue) / 100; 
        const totalBillValue = billTotalValue + tip_amountValue; 

        tip_amount.value = tip_amountValue.toFixed(2); 
        total_bill.value = totalBillValue.toFixed(2);
    }

    // Listening for input text changes
    if (textInput) {
        textInput.addEventListener("input", function(event) {
            const billTotalValue = parseFloat(event.target.value); 
            const tipSliderValue = parseFloat(rangeInput.value); 
            updateFields(billTotalValue, tipSliderValue);
        });
    }

    // Listening for slider changes
    if (rangeInput) {
        rangeInput.addEventListener("input", function(event){
            const tipSliderValue = parseFloat(event.target.value);
            const billTotalValue = parseFloat(textInput.value);
            updateFields(billTotalValue, tipSliderValue);
        });
    }
});
