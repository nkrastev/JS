async function lockedProfile() {
    let main=document.querySelector('#main');
    main.innerHTML='';

    //load profiles
    try {
        const url = `http://localhost:3030/jsonstore/advanced/profiles`;
        const response = await fetch(url);
        const profiles = await response.json();

        for (const item of Object.entries(profiles)) {            
            
            let html=e('div',null,'profile');
            html.innerHTML+='<img src="./iconProfile2.png" class="userIcon" />';
            html.innerHTML+='<label>Lock</label>';
            html.innerHTML+=`<input type="radio" name="user${item[0]}Locked" value="lock" checked>`;
            html.innerHTML+='<label>Unlock</label>';
            html.innerHTML+=`<input type="radio" name="user${item[0]}Locked" value="unlock"><br>`;
            html.innerHTML+='<hr>';
            html.innerHTML+='<label>Username</label>';
            html.innerHTML+=`<input type="text" name="user${item[0]}Username" value="${item[1].username}" disabled readonly />`;
            
            //hidden data
            let hiddenData=e('div',null,null);
            hiddenData.setAttribute("id", `user${item[0]}HiddenFields`);
            hiddenData.style.display='none';
            
            hiddenData.innerHTML+='<hr>';
            hiddenData.innerHTML+='<label>Email:</label>';
            hiddenData.innerHTML+=`<input type="email" name="user${item[0]}Email" value="${item[1].email}" disabled readonly />`;
            hiddenData.innerHTML+='<label>Age:</label>';
            hiddenData.innerHTML+=`<input type="email" name="user${item[0]}Age" value="${item[1].age}" disabled readonly />`;
            
            html.appendChild(hiddenData);
            html.innerHTML+='<button>Show more</button>';                    
            main.appendChild(html);
            
        }

    } catch (error) {
        console.log('Error with fetch');
    }

    //show hide functions 05DOM Manipulation and Events - Exercise
    let btnShowHide=Array
        .from(document.getElementsByTagName('button'))
        .forEach(btn=>btn.addEventListener('click', onClickShowHide));
    
    
    function onClickShowHide(event) {
        let parentDiv=event.target.parentNode;
        let hiddedField=parentDiv.getElementsByTagName('div')[0];        
        let lockedBtn=parentDiv.getElementsByTagName('input')[0]; //first input holds LOCKED status true/false

        //console.log(lockedBtn.checked);

        if (lockedBtn.checked) {
            //profile is locked, show/hide is not working
        }
        else{

            //profile is UNlocked
            if ( event.target.textContent==='Show more') {
                //get hidden field, show it, change button text            
                
                hiddedField.style.display="inline";
                event.target.textContent='Hide it';
            }else{
                //hide info and change button text                       
                hiddedField.style.display="none";
                event.target.textContent='Show more';
            }
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