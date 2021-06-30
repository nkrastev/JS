async function loadCommits() {

    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const ul=document.querySelector('#commits');

    ul.innerHTML='';

    try {                    
        const response = await fetch(url);        
        let data = await response.json();
        let li='';
        if (response.status !== 200) {
            li=e('li','Error 404 Not Found');
            ul.appendChild(li);
        }else{
            data.forEach(element => {
                li=e('li',`${element.commit.author.name}: ${element.commit.message}`);
                ul.appendChild(li);
            });
        }
        
    }
    catch (err) {
        console.log(err);
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