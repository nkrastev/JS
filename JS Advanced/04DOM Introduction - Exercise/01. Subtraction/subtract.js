function subtract() {
    let firstNum=Number(document.getElementById('firstNumber').value);
    let secondNum=Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent=firstNum-secondNum;
}