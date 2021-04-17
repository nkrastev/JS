function sumOfNumbers(num1, num2){
    let first=Number(num1);
    let second=Number(num2);
    let result=0;

    for (i=first; i<=second; i++){
        result+=i;
    }

    console.log(result);
}