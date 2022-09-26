const textArea = document.getElementById('text-area');
const characterCounter = document.getElementById('character-number');
const submitButton = document.getElementById('submit-btn');

//trigger an event everytime the user types on the text area
textArea.addEventListener('input', () => {
    const maxNumber = 200;
    
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumber - numOfEnteredChars;
    characterCounter.innerHTML = counter + '/200';
    
    //changes the counter color as the user approaches the limit
    if(counter > 0 && counter < 20){
        characterCounter.style.color = "orange";
    } else if (counter == 0) {
        characterCounter.style.color = 'red';
    } else {
        characterCounter.style.color = '#3f3f3f';
    }
});

//sending the data from the form in index.html as a JSON file to the API
function sendForm(formData){
    const url = new('http://localhost:3000/api');
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
    })
    .then(res => res.json());
}

//adding event to submit button and execute the SendForm() function, building the JSON file
if(submitButton){
    submitButton.addEventListener("click", () => {
        const question1 = document.querySelector('input[name="radio-group-1"]:checked').value;
        const question2 = document.querySelector('input[name="radio-group-2"]:checked').value;
        const question3 = document.getElementById('options').value;
        const question4 = textArea.value;

        sendForm({question1, question2, question3, question4});
        window.location.href = '/results.html';

    })
}