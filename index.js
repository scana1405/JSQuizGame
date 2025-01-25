 // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div

    const statement = document.getElementById('statement');

    const optionButtons = document.querySelectorAll(`#options button`);

    const explanation = document.getElementById(`explanation`);


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation

    const fact = {
        statement: null,
        answer: null,
        explanation: null
    };

     // TODO 3: Set the text of the statement element to the fact's statement

    statement.textContent = fact.statement;