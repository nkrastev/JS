function attachEvents() {
    const btnLoadPosts=document.querySelector('#btnLoadPosts');
    const btnViewPost=document.querySelector('#btnViewPost');
    btnLoadPosts.addEventListener('click', onClickLoadPosts);
    btnViewPost.addEventListener('click', onClickViewPost);

    async function onClickLoadPosts(event){
        try {
            const urlPosts = `http://localhost:3030/jsonstore/blog/posts`;
            const response = await fetch(urlPosts);
            const posts = await response.json();
            let dropDown=document.querySelector('#posts');

            for (post of Object.entries(posts)) {                
                let option = document.createElement('option');
                option.textContent=post[1].title;
                option.setAttribute('id',post[1].id);
                dropDown.appendChild(option);
            }

        } catch (error) {
            console.log('Error loading posts in drop down');
        }
    }

    async function onClickViewPost(event){
        let dropDown = document.querySelector('#posts');
        let selectedId = dropDown.options[dropDown.selectedIndex].id;
        let ulComments=document.querySelector('#post-comments');
        ulComments.innerHTML='';

        try {
            const urlPost = `http://localhost:3030/jsonstore/blog/posts/${selectedId}`;          
            const response = await fetch(urlPost);           
            const postData = await response.json();
            console.log(postData);
            document.querySelector('#post-title').textContent=postData.title;
            document.querySelector('#post-body').textContent=postData.body;

            //fetch comments
            try {
                const urlComments = `http://localhost:3030/jsonstore/blog/comments`;          
                const response = await fetch(urlComments);           
                const comments = await response.json();
                
                for (comment of Object.entries(comments)) {   
                    
                    if (comment[1].postId==postData.id) {                        
                        let li=e('li',comment[1].text);
                        li.setAttribute('id',comment[1].id);
                        ulComments.appendChild(li);
                    }
                }
                
            } catch (error) {
                console.log('Error loading comments for specific post ID');
            }


        } catch (error) {
            console.log('Error loading view of the selected post');
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

attachEvents();