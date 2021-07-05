function solve() {

    let stopName='';
    let stopNext='';
    let url='http://localhost:3030/jsonstore/bus/schedule/';
    let info=document.querySelector('#info > span');
    let departBtn=document.querySelector('#depart');
    let arriveBtn=document.querySelector('#arrive');

    async function depart() {
        if (stopName=='' && stopNext=='') {//bus is at the start, nextStop ID is 'depot'        
            stopNext='depot';           
        }        

        const response = await fetch(url+stopNext).then(handleErrors);        
        let data = await response.json();       
        stopName=data.name;
        stopNext=data.next;
        console.log('NextStop ' +stopNext); 
        
        //manipulate DOM, valid data
        manipulateInfo('Arriving at ', stopName);      
    }

    async function arrive() {        
        //query for the upcoming stop
        const response = await fetch(url+stopNext).then(handleErrors);        
        let data = await response.json();       
        stopName=data.name;
        stopNext=data.next;
        console.log('NextStop ' +stopNext);
        
        //manipulate DOM, valid data
        manipulateInfo('Next stop ', stopName);        
    }

    return {
        depart,
        arrive
    };   
    
    function manipulateInfo(text, stopName){
        info.textContent=text+stopName;
        if (departBtn.disabled==true) {
            departBtn.disabled=false;
        }else{
            departBtn.disabled=true;
        }
        if (arriveBtn.disabled==true) {
            arriveBtn.disabled=false;
        }else{
            arriveBtn.disabled=true;
        }
    }

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        info.textContent='Error';
        departBtn.disabled=true;
        arriveBtn.disabled=true;
        return response;
    }    
}

let result = solve();