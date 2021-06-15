function addDestination(){
    let inputCity=document.querySelector('#input > input:nth-child(2)').value;
    let inputCountry=document.querySelector('#input > input:nth-child(4)').value;
    let inputSeason=document.querySelector('#seasons').value;
    let table=document.querySelector('#destinations');


    //TODO possible problems with insertRow, can be used append element
    
    if (inputCity!='' && inputCountry!='') {
        let row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = inputCity+', '+inputCountry;
        cell2.innerHTML = inputSeason.charAt(0).toUpperCase() + inputSeason.slice(1);

        document.querySelector('#input > input:nth-child(2)').value='';
        document.querySelector('#input > input:nth-child(4)').value='';

        //update of the stats
        if (inputSeason=='summer') {            
            document.querySelector('#summer').value=Number(document.querySelector('#summer').value)+1;            
        }else if (inputSeason=='winter') {
            document.querySelector('#winter').value=Number(document.querySelector('#winter').value)+1;            
        }else if (inputSeason=='autumn'){
            document.querySelector('#autumn').value=Number(document.querySelector('#autumn').value)+1;                        
        }else{
            document.querySelector('#spring').value=Number(document.querySelector('#spring').value)+1;
        }       
    }
}