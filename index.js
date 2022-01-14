//trying to make the code for a web calculator


//works pretty well

const nums = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const evaluate = document.querySelector(".evaluate")
const removeOne = document.querySelector(".removeOne")
const removeAll = document.querySelector(".removeAll")

const display = document.querySelector("#display")
const previousVal = document.querySelector("#previousVal")
let equation = ""
let solution = ""



//adds functionality to the buttons on the thingerooni waannani with da binderooni and without THIS
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function (e) {
        solution = ""
        equation += e.target.value
        display.textContent = equation
    }.bind(nums[i]))
}

//binds da operator buttons
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function (e) {
        if (solution) {
            equation += solution
            solution = ""
        }
        equation += e.target.value
        display.textContent = equation
    }.bind(operators[i]))
}



evaluate.addEventListener("click", () => {
    solution = eval(equation)
    previousVal.textContent = equation
    display.textContent = solution
    equation = ""


})

removeOne.addEventListener("click", () => {
    equation = equation.slice(0, -1)
    display.textContent = equation
})

removeAll.addEventListener("click", () => {
    equation = ""
    solution = ""
    display.textContent = equation
    previousVal.textContent = solution
})

