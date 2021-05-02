function solve(inputNumber, ...operations){
    
    let num=Number(inputNumber);   

    for (let index = 0; index < operations.length; index++) {
        const element = operations[index];
        switch (operations[index]) {
            case 'chop':
                num/=2;                
                break;
            case 'dice':
                num=Math.sqrt(num);
                break;
            case 'spice':
                num+=1;
                break;
            case 'bake':
                num*=3;
                break;
            case 'fillet':
                num-=num*20/100;
                break;                    
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');