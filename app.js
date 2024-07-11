/*-------------------------------- Constants --------------------------------*/
const calculations = {
    add: function (num1, num2) {
        let totalSum = num1 + num2
        return totalSum
    },
    subtract: function (num1, num2) {
        let totalDiff = num1 - num2
        return totalDiff
    },
    multiply: function (num1, num2) {
        let totalProd = num1 * num2
        return totalProd
    },
    divide: function (num1, num2) {
        let totalQuot = num1 / num2
        return totalQuot
    }
}
/*-------------------------------- Variables --------------------------------*/

let string = []
let numbers = []
let operators = []


/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator')
const displayTotal = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // create a string of chars until the clear or equal button is clicked
    if (event.target.innerText !== 'c' || event.target.innerText !== '=') {
        string.push(event.target.innerText)
        // display the string as you type
        displayTotal.innerText = string.join('')
        let opIdx = []
        // determine the number of operations entered and their respective indices
        string.forEach((char) => {
            if (char === '+' || char === '-' || char === '*' || char === '/') {
                opIdx.push(string.indexOf(char))
            }
        })
        // loop through the string to find first 2 substrings of numbers
        // push that number into the numbers array
        let start = 0
        for (let i =0; i < opIdx.length;i++) {
            numbers.push(Number(string.slice(start,opIdx[i]).join('')))
        }
        // pushes the last number into the number array
        /* this is an issue if there are only 2 numbers and 1 operator */
        numbers.push(Number(string.slice(opIdx[opIdx.length - 1]).join('')))
        for (let i = 0; i < opIdx.length; i++) {
            operators.push(string[opIdx[i]])
        } 
        } else if (event.target.innerText === 'c') {
            numbers = null
            operators = null
            displayTotal.innerText = ''
        } else {
            displayTotal.innerText = ''
            let output
            operators.forEach((operation) => {
                opIdx = operators.indexOf(operation)
                switch (operation) {
                    case '+': 
                    output = calculations.add(numbers[opIdx], numbers[opIdx + 1])
                    break
                    case '-': 
                    output = calculations.subtract(numbers[opIdx], numbers[opIdx + 1])
                    break
                    case '*': 
                    output = calculations.multiply(numbers[opIdx], numbers[opIdx + 1])
                    break
                    case '/': 
                    output = calculations.divide(numbers[opIdx], numbers[opIdx + 1])
                    break
                }
            })
            displayTotal.innerText = output
        }

    // // two numbers and 1 operator method
    // if (event.target.classList.contains('number')) {
    //     // store that number temporarily and display it on the 'row'
    //     numbers.push(Number(event.target.innerText))
    //     // displayTotal.innerText = event.target.innerText
    // }
    // if (event.target.innerText === '+') {
    //     operators.push(event.target.innerText)
    //     // displayTotal.innerText = event.target.innerText
    // }
    // if (event.target.innerText === '-') {
    //     operators.push(event.target.innerText)
    //     // displayTotal.innerText = event.target.innerText
    // }
    // if (event.target.innerText === '*') {
    //     operators.push(event.target.innerText)
    //     // displayTotal.innerText = event.target.innerText
    // }
    // if (event.target.innerText === '/') {
    //     operators.push(event.target.innerText)
    //     // displayTotal.innerText = event.target.innerText
    // }

    // if (event.target.innerText === 'c') {
    //     numbers = []
    //     operators = []
    //     displayTotal.innerText = ''
    // }

    // if (event.target.innerText === '=') {
    //     let output
    //     operators.forEach((operation) => {
    //         switch (operation) {
    //             case '+': 
    //                 output = calculations.add(numbers)
    //                 break
    //             case '-':
    //                 output = calculations.subtract(numbers)
    //                 break
    //             case '*':
    //                 output = calculations.multiply(numbers)
    //                 break
    //             case '/':
    //                 output = calculations.divide(numbers)
    //                 break
    //             default:
    //                 console.log(`oh, no...`)
    //         }
    //     })
    //     displayTotal.innerText = output
    //     numbers = []
    //     operators = []
    // }
    }
)
  
/*-------------------------------- Functions --------------------------------*/
