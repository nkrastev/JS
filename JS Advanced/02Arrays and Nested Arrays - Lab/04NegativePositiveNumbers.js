function solve(arr){

    let result=[];   
    
    for (let index = 0; index < arr.length; index++) {        

       if (arr[index]<0) {                         
             result.unshift(arr[index]);                                   
        }
        else{                 
            result.push(arr[index]);               
        }        
        
    }
    result.forEach(e => console.log(e))    
}

solve([7, -2, 8, 9,7,-2,1]);