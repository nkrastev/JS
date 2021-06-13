class Story{
    constructor(title, creator){
        this.title=title;
        this.creator=creator;
        this._comments=[];
        this._likes=[];
    }

    get likes(){
        if (this._likes.length==0) {
            return `${this.title} has 0 likes`;
        }else if (this._likes.length==1) {
            return `${this._likes[0]} likes this story!`;
        }else{
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
        }
    }

    like(username){
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (this.creator===username) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike (username){
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }
        const index=this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){
        //TODO CHECK IF filter returns corrent result
        if (id==undefined || this._comments.filter(e => e.id == id).length == 0) {
            //undefined or comment dont have equal ID for reply                        
            let comment={
                id: this._comments.length+1,
                username: username,
                content: content,
                replies: []
            };
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }else{
            //create a reply to specific comment
            let indexForComment=this._comments.indexOf(this._comments.find(e=>e.id==id));                       
            if (this._comments[indexForComment].replies==undefined) {
                this._comments[indexForComment].replies=[];
            }
            let newReply={
                id: this._comments[indexForComment].replies.length+1,
                username:username,
                content:content
            }
            this._comments[indexForComment].replies.push(newReply);
            return `You replied successfully`;
        }
    }

    toString (sortingType){
        let result=`Title: ${this.title}\n`;
        result+=`Creator: ${this.creator}\n`;
        result+=`Likes: ${this._likes.length}\n`;
        result+=`Comments:\n`;

        if (sortingType=='asc') {
            for (let likeItem of this._comments) {                
                result+=`-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;                
                if (likeItem.replies.length>0) {                                        
                    for (const key of likeItem.replies) { 
                        result+=`--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;                                               
                    }
                }                                
            }
            result=result.trimEnd();
        }


        if (sortingType=='desc'){
            let reversedComments=this._comments.reverse();            
            for (let likeItem of reversedComments) {            
                result+=`-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;                                               
                if (likeItem.replies.length>0) { 
                    let reverseReplies=  likeItem.replies.reverse();                 
                    for (const key of reverseReplies) {
                        result+=`--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;
                    }
                }                
            }
            result=result.trimEnd();
        }

        if (sortingType=='username'){
            let userSorted=this._comments.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0));          
            for (let likeItem of userSorted) {            
                result+=`-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;                                               
                if (likeItem.replies.length>0) { 
                    let userReplySorted=  likeItem.replies.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0));               
                    for (const key of userReplySorted) {
                        result+=`--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;
                    }
                }                
            }
            result=result.trimEnd();
        }

        return result;
    }
}


let art = new Story("My Story", "Anny");

art.comment("Anny", "Some Content")
art.comment("Ammy", "New Content", 1)
art.comment("Zane", "Reply", 2)
art.comment("Jessy", "Nice :)")
art.comment("SAmmy", "Reply@", 2)

console.log(art.toString('asc'));
