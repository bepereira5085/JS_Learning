function clearDisplay(){
    const display = document.getElementById('display')
    display.value = ' '
}

function writeDisplay(digit){
    const display = document.getElementById('display')
    if (digit == '*'){
        digit = 'x'
    }
    if (display.value == 'Invalid'){
        clearDisplay()
    }
    display.value += digit
}

function calculateResult(event) {
    event.preventDefault()
    const display = document.getElementById('display')
    let expression = display.value.replace('x','*')
    try {display.value = ' ' + eval(expression)

    } catch(error){
        display.value = 'Invalid'
    }
}