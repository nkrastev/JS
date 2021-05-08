function solve(commands=[]){

    const initialNumber=1;
    let result=[];
    result.push(initialNumber);

    for (let index = 1; index <= commands.length; index++) {
        
        if (commands[index]==='add') {
            result.push(index+1);
        }

        if (commands[index]==='remove') {
            result.pop();
        }
        
    }

    if (result.length===0) {
        console.log('Empty');
    }
    else{
        console.log(result.join('\r\n'));

    }
}

// solve(['add', 
// 'add', 
// 'add', 
// 'add']
// );

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);