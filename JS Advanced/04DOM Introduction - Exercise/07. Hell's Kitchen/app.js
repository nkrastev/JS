function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputTextarea=document.getElementsByTagName('textarea')[0].value;
      let restaurant=JSON.parse(inputTextarea);

      //catalogue is array of restaurant objects
      let catalogue=[];

      for (let index = 0; index < restaurant.length; index++) {         

         let items=restaurant[index].split(' - ');
         let restaurantName=items[0];                      

         //prepare workers as array of objects
         let stringWorkers=items[1].split(', ');         
         let listOfWorkers=[];      
         for (let index = 0; index < stringWorkers.length; index++) {            
            let worker=stringWorkers[index].split(' ');
            listOfWorkers.push({name:worker[0], salary:Number(worker[1])});
         }

         let data = catalogue.find( function( ele ) { 
            return ele.name === restaurantName;
         } );
        
         if( data ) {      
            //restaurant with this name exists      
            listOfWorkers=listOfWorkers.concat(data.workers);
            listOfWorkers.sort((a, b) => (a.salary > b.salary) ? -1 : 1);
            data.averageSalary=calculateAverageSalary(listOfWorkers);
            data.bestSalary=getBestSalary(listOfWorkers);
            data.workers=listOfWorkers;            
         }
         else{
            //new restaurant
            let averageSalary=calculateAverageSalary(listOfWorkers);
            let bestSalary=getBestSalary(listOfWorkers);

            //sort workers by salary... 
            listOfWorkers.sort((a, b) => (a.salary > b.salary) ? -1 : 1);
                        
            catalogue.push({name:restaurantName, avgSalary:Number(averageSalary), bestSalary:bestSalary, workers:listOfWorkers});    
         }
         console.log(listOfWorkers);
              
      }
      
      //sort restaurants by AVG salary and get first one
      catalogue.sort((a, b) => (a.avgSalary > b.avgSalary) ? -1 : 1);

      let line1=`Name: ${catalogue[0].name} Average Salary: ${catalogue[0].avgSalary.toFixed(2)} Best Salary: ${catalogue[0].bestSalary.toFixed(2)}`;
      let line2= catalogue[0].workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');

      document.getElementById("bestRestaurant").querySelectorAll("p")[0].textContent=line1; 
      document.getElementById("workers").querySelectorAll("p")[0].textContent=line2; 

      function calculateAverageSalary(workers) {
         let salariesSum=0;
         for (let index = 0; index < workers.length; index++) {                        
            salariesSum+=workers[index].salary;            
         }         
         return salariesSum/workers.length;
      }
      function getBestSalary(workers) {
         let bestSalary=0;
         for (let index = 0; index < workers.length; index++) {                       
            if (bestSalary<workers[index].salary) {
               bestSalary=workers[index].salary;
            }
         }         
         return bestSalary;
      }      
   }
}