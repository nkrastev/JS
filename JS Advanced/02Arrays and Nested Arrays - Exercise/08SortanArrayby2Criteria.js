function solve(arr=[]){

    arr.sort(function(nameA, nameB) {
        if (nameA.length < nameB.length) {
          return -1;
        }
        if (nameA.length > nameB.length) {
          return 1;
        }      
        // names length is equal, second compare method
        return nameA.localeCompare(nameB);
      });

    console.log(arr.join('\r\n'));

}

solve(['test', 
'Deny', 
'omen', 
'Default'
]
);