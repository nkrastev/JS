function loadRepos() {
	const ulElement=document.querySelector('#repos');
    ulElement.innerHTML='';

    const username=document.querySelector('#username').value;
    const url=`https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                

                let a = document.createElement('a');
                let li = document.createElement('li');

                a.setAttribute('href',element.html_url);
                a.innerHTML = element.full_name;
                
                li.appendChild(a);
                ulElement.appendChild(li);
            });
        } )
        .catch((error) => {
            console.error('Error:', error);
        });
        

}

