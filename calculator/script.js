
document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    screen.style.textAlign = "center";
    screen.style.fontSize = "3rem";
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent;
            
            if (value === "Ac") {
                currentInput = "";
            } else if (value === "C") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "=") {
                try {
                    currentInput = calculate(currentInput);
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }
            
            screen.value = currentInput;
        });
    });
});

function calculate(expression) {
    let result = 0;
    try {
        result = new Function('return ' + expression.replace(/×/g, '*').replace(/÷/g, '/'))();
    } catch (error) {
        result = "Error";
    }
    return result;
}
document.body.style.background = "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";