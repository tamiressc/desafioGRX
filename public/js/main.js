let textArea = document.getElementById('text-area');
let characterCounter = document.getElementById('character-number');
let btnSubmit = document.getElementById('submit-btn');

//trigger an event everytime the user types on the text area
if(textArea){
    textArea.addEventListener('beforeinput',() => {
        const maxNumber = 200;
    
        let numOfEnteredChars = textArea.value.length;
        let counter = maxNumber - numOfEnteredChars;
        characterCounter.innerHTML = counter + '/200';
        
        //changes the counter color as the user approaches the limit
        if (counter < 0) {
            characterCounter.style.color = 'red';
        } else if (counter < 20) {
            characterCounter.style.coleta = 'orange';
        } else {
            characterCounter.style.color = '#3f3f3f';
        }
    });
}

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

submitButton.addEventListener("Click", () => {
    const question1 = document.querySelector('input[name="radio-group-1"]:checked').value;
    const question2 = document.querySelector('input[name="radio-group-2"]:checked').value;
    const question3 = document.getElementById('options').value;
    const question4 = textArea.value;

    sendForm({question1, question2, question3, question4});

})