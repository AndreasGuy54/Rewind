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