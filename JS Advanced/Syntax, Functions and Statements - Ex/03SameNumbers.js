function sameNumbers(input){    
    let stringNumber=input.toString();
    let firstDigit=stringNumber[0];
    let areEqual=true;
    let sum=0;

    for(i=0; i<stringNumber.length; i++){
        if(firstDigit!==stringNumber[i]){
            areEqual=false;            
        }
        sum+=Number(stringNumber[i]);
    }

    console.log(areEqual);
    console.log(sum);
}

sameNumbers(222)