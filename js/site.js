// Get the string from the input on the app page (controller function)
const getValue = () => {

    document.querySelector("#alert").classList.add("invisible");

    let userInput = document.querySelector("#userInput").value;
    let reversedInput = reverseString(userInput);

    displayString(reversedInput);
}

// Reverse the string (logic function)
const reverseString = (input) => {
    let revString = [];
    // let revString = ""

    for (let i = (input.length - 1); i >= 0; i--) {
        revString.push(input[i]);
        //revString += userString[i];
    }

    return revString.join("");
}

// Display the reversed string to the user (view function)
const displayString = (reversed) => {
    document.querySelector("#message").innerHTML = `Your string when reserved is: ${reversed}`;
    document.querySelector("#alert").classList.remove("invisible");
}

// Display the numbers and make even numbers bold
// const displayNumbers = (nums) => {
//     let templateRows = '';

//     nums.forEach(num => {
//         let className = '';

//         if (num % 2 === 0) {
//             className = 'even';
//         } 
        
//         templateRows += `<tr><td class="${className}">${num}</td></tr>`;
//     });

//     document.querySelector('#results').innerHTML = templateRows;
// }