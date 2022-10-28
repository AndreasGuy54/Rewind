// Get the string from the input on the app page (controller function)
const getValue = () => {

}

// Reverse the string (logic function)
const reverseString = () => {

}

// Display the reversed string to the user (view function)
const displayString = () => {

}


const getValues = () => {
    let firstNum = parseInt(document.querySelector('#startValue').value)
    let lastNum = parseInt(document.querySelector('#endValue').value)

    let numbers = generateNumbers(firstNum, lastNum);

    displayNumbers(numbers);
}
// generate numbers from the start value to the end value
const generateNumbers = (startVal, endVal) => {
    let nums = [];

    for (let i = startVal; i <= endVal; i++) {
        nums.push(i);
    }
    return nums;
}

// Display the numbers and make even numbers bold
const displayNumbers = (nums) => {
    let templateRows = '';

    nums.forEach(num => {
        let className = '';

        if (num % 2 === 0) {
            className = 'even';
        } 
        
        templateRows += `<tr><td class="${className}">${num}</td></tr>`;
    });

    document.querySelector('#results').innerHTML = templateRows;
}