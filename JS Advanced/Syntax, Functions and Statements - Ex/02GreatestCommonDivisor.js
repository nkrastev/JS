function greatestDivisor(num1, num2){
    let smallerNumber=0;
    let gcdNumber=0;

    if (num1>num2){
        smallerNumber=num2;
    }
    else{
        smallerNumber=num1;
    }

    for(i=1; i<=smallerNumber; i++){
        if(num1 % i ==0 && num2 % i==0){
            gcdNumber=i;
        }        
    }

    console.log(gcdNumber);
}