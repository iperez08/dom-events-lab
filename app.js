/*-------------------------------- Constants --------------------------------*/
const calculations = {
    add: function (nums) {
        let totalSum = nums[0] + nums[1]
        return totalSum
    },
    subtract: function (nums) {
        let totalDiff = nums[0] - nums[1]
        return totalDiff
    },
    multiply: function (nums) {
        let totalProd = nums[0] * nums[1]
        return totalProd
    },
    divide: function (nums) {
        let totalQuot = nums[0] / nums[1]
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
    // two single-digit numbers and 1 operator method
    if (event.target.classList.contains('number')) {
        // store that number temporarily and display it on the 'row'
        numbers.push(Number(event.target.innerText))
        string.push(event.target.innerText)
        displayTotal.innerText = string.join(" ")
    }
    if (event.target.innerText === '+') {
        operators.push(event.target.innerText)
        string.push(event.target.innerText)
        displayTotal.innerText = string.join(" ")
    }
    if (event.target.innerText === '-') {
        operators.push(event.target.innerText)
        string.push(event.target.innerText)
        displayTotal.innerText = string.join(" ")
    }
    if (event.target.innerText === '*') {
        operators.push(event.target.innerText)
        string.push(event.target.innerText)
        displayTotal.innerText = string.join(" ")
    }
    if (event.target.innerText === '/') {
        operators.push(event.target.innerText)
        string.push(event.target.innerText)
        displayTotal.innerText = string.join(" ")
    }

    if (event.target.innerText === '=') {
        let output
        operators.forEach((operation) => {
            switch (operation) {
                case '+': 
                    output = calculations.add(numbers)
                    break
                case '-':
                    output = calculations.subtract(numbers)
                    break
                case '*':
                    output = calculations.multiply(numbers)
                    break
                case '/':
                    output = calculations.divide(numbers)
                    break
                default:
                    console.log(`oh, no...`)
            }
        })
        displayTotal.innerText = output
        numbers = []
        operators = []
        string = []
    }
    if (event.target.innerText === 'C') {
        displayTotal.innerText = ''
        numbers = []
        operators = []
        string = []
    }
    }
)
  
/*-------------------------------- Functions --------------------------------*/
