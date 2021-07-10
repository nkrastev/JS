function attachEvents() {
    const btnSubmit=document.querySelector('#submit');
    const btnRefresh=document.querySelector('#refresh');
    btnSubmit.addEventListener('click', onSubmitData);
    btnRefresh.addEventListener('click', onRefresh);

    async function onSubmitData(event) {
        event.preventDefault();
        let authorName=document.querySelector('#controls > input[type=text]:nth-child(2)').value;
        let msgText=document.querySelector('#controls > input[type=text]:nth-child(5)').value;

        if (authorName=='' || msgText=='') {
            return;
        }

        let data={author:authorName, content:msgText};

        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/messenger', {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(data),
                });        
            
            if (response.status !== 200 ) {
                console.log('Error POST request'); 
                console.log(response.status);
            }else{
                console.log('POST request successful'); 
                console.log(response.status);
            }        
        }
        catch (err) {
            console.log(err.message);            
        }                        
    }

    async function onRefresh(event) {
        event.preventDefault();
        let textArea=document.querySelector('#messages');
        textArea.value='';

        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/messenger');   
            
            if (response.status !== 200 ) {
                console.log('Error GET request'); 
                console.log(response.status);
            }else{
                console.log('GET request successful'); 
                let data=await response.json();
                console.log(data);

                for (const item of Object.values(data)) { 
                    console.log(item.author);
                    textArea.value+=item.author+": "+item.content+'\n';                                       
                }
            }        
        }
        catch (err) {
            console.log(err.message);            
        }        
    }
}

attachEvents();