const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;

        if (val === 'C') {
            expression = "";
            screen.textContent = "0";
        } else if (val === '⌫') {
            expression = expression.slice(0, -1);
            screen.textContent = expression || "0";
        } else if (val === '=') {
            try {
                expression = eval(expression).toString();
                screen.textContent = expression;
            } catch {
                screen.textContent = "Error";
                expression = "";
            }
        } else {
            expression += val;
            screen.textContent = expression;
        }
    });
});
