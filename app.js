
const resultElement = document.getElementById('result')
const textResult = document.getElementById('txt')
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const umnogBtn = document.getElementById('umnog')
const delenieBtn = document.getElementById('delenie')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

umnogBtn.onclick = function () {
    action = 'x'
}

delenieBtn.onclick = function () {
    action = '/'
}


submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    } else if (action == 'x') {
        const sum = Number(input1.value) * Number(input2.value)
        resultElement.textContent = sum
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        resultElement.textContent = sum
    }
    textResult.innerText = 'Заебись решено!'
}
