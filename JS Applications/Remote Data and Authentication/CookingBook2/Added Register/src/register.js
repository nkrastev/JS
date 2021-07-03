window.addEventListener('load', async () => {
   

    let formRegister=document.querySelector('body > main > article > form');
    formRegister.addEventListener('submit', onRegister);

    async function onRegister(event) {
        event.preventDefault();
        console.log('event'+event.target);

        let formData=new FormData(event.target);

        /*for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(JSON.stringify(Object.fromEntries(formData)));*/
                
        let response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        });
        let data=await response.json();

        //yeeeeeeee ей го токъна след 1 час
        console.log(data.accessToken);

        sessionStorage.accessToken=data.accessToken;
        if (sessionStorage.getItem('accessToken')==data.accessToken) {
            alert('You have registered and logged in successfully. After 3 seconds you will be redirected');
            setTimeout(function(){ window.location.replace("./index.html") }, 3000);            
        }else{
            alert('There is some error with your registration');
        }
        
        
    }
      
    
});

