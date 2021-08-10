function solve() {
   let postsSection=document.querySelector('body > div > div > main > section');
   let createButton=document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
   createButton.addEventListener('click', onClickAddPost);

   function onClickAddPost(event) {
      event.preventDefault();
      let author=document.querySelector('#creator').value;
      let title=document.querySelector('#title').value;
      let category=document.querySelector('#category').value;
      let content=document.querySelector('#content').value;
      //create item
      let article=e('article',null,null);
      let h1=e('h1',title,null);
      
      let p1=e('p','Category: ',null,null);
      p1.appendChild(e('strong',category,null));
   
   
      let p2=e('p', 'Creator: ',null,null);
      p2.appendChild(e('strong',author,null));
   
      let p3=e('p',content,null);
      let divBtns=e('div',null,'buttons');
      let btnDel=e('button','Delete','btn delete');
      btnDel.addEventListener('click', onDeleteClick);
      let btnArc=e('button','Archive','btn archive');
      btnArc.addEventListener('click', onArchiveClick);
   
      divBtns.appendChild(btnDel);
      divBtns.appendChild(btnArc);
   
      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(divBtns);
      document.querySelector('body > div > div > main > section').appendChild(article);
   }

   function onDeleteClick(event) {
      event.preventDefault();
      event.target.parentNode.parentNode.remove();
   }
   function onArchiveClick(event) {
      event.preventDefault();
      let elementForMovement=event.target.parentNode.parentNode.querySelector('h1').innerHTML;
      event.target.parentNode.parentNode.remove();
      let archiveList=document.querySelector('body > div > div > aside > section.archive-section > ol');
      archiveList.appendChild(e('li',elementForMovement,null));

      //sorting stack overflow RULZ :)        
      let ol = document.getElementsByTagName('ol')[0];
      Array.from(ol.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ol.appendChild(li));
      
   }
   
   //factory function, create DOM element
   function e(type, content, className) {
      const result = document.createElement(type);
      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }

}


