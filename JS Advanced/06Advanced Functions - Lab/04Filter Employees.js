function solve(inputAsJSON, criteria){
    let data=JSON.parse(inputAsJSON);
    
    const [filterBy, filterValue]=criteria.split('-');
    //??? const <> let????????    
    
    let result=data.filter((item) => item[filterBy] == filterValue);
    let count=0;

    for (const item of result) {
        console.log(`${count}. ${item.first_name} ${item.last_name} - ${item.email}`);
        count++;
    }        
    
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);