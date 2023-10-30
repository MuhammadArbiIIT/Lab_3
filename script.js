//getting id's from HTML 
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById("textInput"); 
    const rangeInput = document.getElementById("rangeInput"); 
    const tip_percent = document.getElementById("tip_percent"); 
    const tip_amount = document.getElementById("tip_amount"); 
    const total_bill = document.getElementById("total_bill"); 
    const form = document.querySelector(".label") 
    //listening for input text and rangeInput
    if (textInput) {
        textInput.addEventListener("input", function(event) {
            const billTotalValue = parseFloat(event.target.value); 
            const tipSliderValue = parseFloat(rangeInput.value); 
            tip_percent.textContent = tipSliderValue; 

            //math to find out tip amount value and total bill value
            const tip_amountValue = (billTotalValue * tipSliderValue) / 100; 
            const totalBillValue = billTotalValue + tip_amountValue; 

            tip_amount.value = tip_amount.toFixed(2); 
            total_bill.value = totalBillValue.toFixed(2);
            
        });
    }
//use rangeInput(tip slider) and display the value as well as use it for calculations
    if (rangeInput) {
        rangeInput.addEventListener("input", function(event){
            const tipSliderValue = parseFloat(event.target.value);
            tip_percent.textContent = tipSliderValue;

            const billTotalValue = parseFloat(textInput.value);
            const tipAmountValue = (billTotalValue * tipSliderValue) / 100; 
            const totalBillValue = billTotalValue + tipAmountValue; 

            tip_amount.value = tipAmountValue.toFixed(2);
            total_bill.value = totalBillValue.toFixed(2);
        });
    }
});