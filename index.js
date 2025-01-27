 // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div

    const statement = document.getElementById('statement');

    const optionButtons =  document.querySelectorAll('#options button');
   
    const explanation = document.getElementById(`explanation`);


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation

    const fact = {
        statement: `JavaScript is the best programming language`,
        answer: true,
        explanation: `It is of course. Are you insane !?`
    };

     // TODO 3: Set the text of the statement element to the fact's statement

    statement.textContent = fact.statement;


    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element

    function enableFunction(value){
        value.removeAttribute('disabled');
      
    }

    const disable = (value) => value.setAttribute('disabled','');


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer

    function isTrue(answer){
        return answer.toString() === fact.answer.toString();
    }

     // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


        for(let option of optionButtons){
            option.addEventListener('click', (event) => {
                explanation.textContent = fact.explanation;
                for(let options of optionButtons){
                    disable(options);
                }
                
                if(isTrue(event.target.textContent)){
                    event.target.classList.add("correct");
                }
                else{
                    event.target.classList.add("incorrect");
                }

            })
        }

       

        // TODO 7: Within the event handler function, 
        // Use a for loop to disable all the option buttons

        