class ArtGallery{
    constructor(creator){
        this.creator=creator;
        this.possibleArticles={"picture":200,"photo":50,"item":250 };
        //{articleModel, articleName, quantity}. The articleModel must be toLowerCase().
        this.listOfArticles=[];
        this.guests=[];
    }

    addArticle( articleModel, articleName, quantity ){
        let hasProp=false;        
        for (const property in this.possibleArticles) {
            if (property.toLowerCase()==articleModel.toLowerCase()) {
                hasProp=true;
            }
        }
        if (!hasProp) {
            throw new Error('This article model is not included in this gallery!');
        }
        //if articleName already exists in listOfArticles array and the articleModel is the same 
        if (this.listOfArticles.find(e=>e.articleModel.toLowerCase()==articleModel.toLowerCase() && e.articleName==articleName)) {
            let target=this.listOfArticles.find(e=>e.articleModel.toLowerCase()==articleModel.toLowerCase() && e.articleName==articleName);
            
            target.quantity+=quantity;
        }else{
            let newArticle={articleModel, articleName, quantity};
            this.listOfArticles.push(newArticle);
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
        //not exist, new article
        
    }

    inviteGuest ( guestName, personality){
        if (this.guests.find(e=>e.guestName==guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points=50;
        if (personality=='Vip') {
            points=500;
        }else if (personality=='Middle') {
            points=250;
        }

        let newGuest={guestName, points, purchaseArticle: 0};
        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        if (!this.listOfArticles.find(e=>e.articleModel.toLowerCase()==articleModel.toLowerCase() && e.articleName==articleName)) {
            throw new Error(`This article is not found.`);
        }
        let targetArticle=this.listOfArticles.find(e=>e.articleModel.toLowerCase()==articleModel.toLowerCase() && e.articleName==articleName);
        console.log(targetArticle);
        if (targetArticle.quantity==0) {
            return `The ${articleName} is not available.`;
        }
        if (!this.guests.find(e=>e.guestName==guestName)) {
            return `This guest is not invited.`;
        }
        let targetGuest=this.guests.find(e=>e.guestName==guestName);

        //console.log(targetGuest.points)
        //console.log(this.possibleArticles[articleModel]);
        if (targetGuest.points<this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        }

        targetGuest.purchaseArticle+=1;
        targetGuest.points-=this.possibleArticles[articleModel];
        targetArticle.quantity-=1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo (criteria){
        let result='';
        if (criteria=='article') {
            result+=`Articles information:\n`;
            for (const item of this.listOfArticles) {
                result+=`${item.articleModel.toLowerCase()} - ${item.articleName} - ${item.quantity}\n`;
            }
        }
        if (criteria=='guest') {
            result+=`Guests information:\n`;
            for (const item of this.guests) {
                result+=`${item.guestName} - ${item.purchaseArticle}\n`;
            }
        }

        return result.trimEnd();
    }
}

let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John');
art.buyArticle('item', 'Ancient vase', 'Peter');
console.log(art.listOfArticles);
console.log(art.showGalleryInfo('article'));

/*Unexpected error: expected 
'Articles information:\npicture - Mona Liza - 3\nItem - Ancient vase - 2\npicture - Mona Liza - 1' 
to equal 
'Articles information:\npicture - Mona Liza - 3\nitem - Ancient vase - 1'*/