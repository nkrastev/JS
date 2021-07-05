async function getInfo() {
    const busId=Number(document.querySelector('#stopId').value);
    const stopName=document.querySelector('#stopName');
    stopName.textContent='';
    document.querySelector('#buses').innerHTML='';

    let url=`http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    const validIds=[1287, 1308, 1327, 2334];    

    //check id
    if (!validIds.includes(busId) || isNaN(busId) || busId=='') {
        stopName.textContent='Error'; 
        console.log('Invalid ID');
    }else{
        console.log('valid ID');
        try {                    
            const response = await fetch(url);        
            
            if (response.status !== 200 ) {
                stopName.textContent='Error';
                console.log('Valid ID but Invalid response'); 
                console.log(response.status)              ;
            }else{
                data = await response.json();                
                stopName.textContent=data.name;
                console.log(data.buses);
                for (const [key, value] of Object.entries(data.buses)) { 
                    document.querySelector('#buses').appendChild(e('li',`Bus ${key} arrives in ${value} minutes`));                                       
                }
            }            
        }
        catch (err) {
            console.log(err);
            //not successful fetch
            stopName.textContent='Error';
        }
    }

    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }    
}

