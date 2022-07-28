const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky");
const checkButton = document.querySelector("#check");
const outputValue = document.querySelector("#output");

checkButton.addEventListener("click", decisiveFunc)


function addDateNumbers(dob) {  // adds up the digits of all the numbers in a birthdate
    let sum = 0;
    birthDate = dob.replaceAll("-","");
    for(let i=0; i<birthDate.length; i++) {
        sum += Number(birthDate.charAt(i));
    }
    return sum;
}

function decisiveFunc() {   // this function brings everything together which is then being called inside the EventListener.
    const dob = dateOfBirth.value;
    const sum = addDateNumbers(dob);

    if(sum&&luckyNumber.value)  // to check if both: the date and lucky number were entered. If yes, run the condition, if not, then print a mssg.
    isYourBdayLucky(sum, luckyNumber.value);

    else
    outputValue.innerText = "Add all the values please";
}

function isYourBdayLucky(sum, luckyNumber) {   // to check if bday is lucky or not
    if (sum % luckyNumber === 0) {
        outputValue.innerText = "Yahoo! You're lucky amigo! 🥳 ";
    }
    else {
        outputValue.innerText = "Ah damn, not so lucky mate 😬";
    }
}