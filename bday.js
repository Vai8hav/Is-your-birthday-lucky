const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky");
const checkButton = document.querySelector("#check");
const outputValue = document.querySelector("#output");

checkButton.addEventListener("click", decisiveFunc)


function addDateNumbers(dob) { 
    let sum = 0;
    birthDate = dob.replaceAll("-","");
    for(let i=0; i<birthDate.length; i++) {
        sum += Number(birthDate.charAt(i));
    }
    return sum;
}

function decisiveFunc() {  
    const dob = dateOfBirth.value;
    const sum = addDateNumbers(dob);

    if(sum&&luckyNumber.value) 
    isYourBdayLucky(sum, luckyNumber.value);

    else
    outputValue.innerText = "Add all the values please";
}

function isYourBdayLucky(sum, luckyNumber) {  
    if (sum % luckyNumber === 0) {
        outputValue.innerText = "Yahoo! You're lucky amigo! 🥳 ";
    }
    else {
        outputValue.innerText = "Ah damn, not so lucky mate 😬";
    }
}