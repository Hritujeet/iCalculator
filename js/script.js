const inpBox = document.getElementById('inp');
let buttons = document.getElementsByTagName("button");

// function for solving expressions
const solveExp = (expression) => {
    console.log("You have clicked the equal to 'Evaluate' button");
    let answer = eval(expression);
    console.log(answer);
    if(answer == undefined){
        alert("Expression can never be empty");
    }
    else{
        inpBox.value = answer;
    }
}

// Making the buttons work
for (const btn of buttons) {
    if (btn.innerText == 'Evaluate') {
        // Solving the expression and giving the answer

        btn.addEventListener('click', () => {
            try {
                let expression = inpBox.value;
                solveExp(expression);
            } catch (error) {
                // If the user enters an invalid expression
                alert("Please enter the expression correctly!");
            }
        })
    }

    else if (btn.innerText == 'AC') {
        // Clear the textarea

        btn.addEventListener('click', () => {
            inpBox.value = '';
        })
    }

    else {
        // This will allow user to write the expresions in the textarea

        btn.addEventListener('click', (event) => {
            inpBox.value += event.target.innerText
        })
    }
}
