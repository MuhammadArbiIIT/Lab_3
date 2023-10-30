document.addEventListener('DOMContentLoaded', function() {

    const textInput = document.getElementById("textInput"); 
    if (textInput) {
        textInput.addEventListener("change", function(event) {
            const inputValue = event.target.value;
            console.log(inputValue);
        
        })
    }

    });