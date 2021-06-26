function solve() {
   const btnSignup=document.querySelector('#availableCourses > div.courseFoot > button');
   btnSignup.addEventListener('click', onClickSignup);

   function onClickSignup(event){
      event.preventDefault();//prevent page from reloading

      //TODO clear input?
      document.querySelector('#myCourses > div.courseBody > ul').innerHTML='';
      document.querySelector('#myCourses > div.courseFoot > p').textContent='Cost: 0.00 BGN';

      const jsFund=document.querySelector('#availableCourses > div.courseBody > ul > li:nth-child(1) > input[type=checkbox]').checked;
      const jsAdv=document.querySelector('#availableCourses > div.courseBody > ul > li:nth-child(2) > input[type=checkbox]').checked;
      const jsApp=document.querySelector('#availableCourses > div.courseBody > ul > li:nth-child(3) > input[type=checkbox]').checked;
      const jsWeb=document.querySelector('#availableCourses > div.courseBody > ul > li:nth-child(4) > input[type=checkbox]').checked;

      const online=document.querySelector('#educationForm > input[type=radio]:nth-child(4)').checked;

      //price consts
      const jsFundPrice=170;
      const jsAdvPrice=180;
      const jsAppPrice=190;
      const jsWebPrice=490;

      let totalPrice=0;

      //create course list and append it
      let ulElement=document.querySelector('#myCourses > div.courseBody > ul');

      if (jsFund==true) {
         let liElement=e('li','JS-Fundamentals',null);
         ulElement.appendChild(liElement);
         totalPrice+=jsFundPrice;
      }
      if (jsAdv==true) {
         let liElement=e('li','JS-Advanced',null);
         ulElement.appendChild(liElement);
         totalPrice+=jsAdvPrice;
      }
      if (jsApp==true) {
         let liElement=e('li','JS-Applications',null);
         ulElement.appendChild(liElement);
         totalPrice+=jsAppPrice;
      }
      if (jsWeb==true) {
         let liElement=e('li','JS-Web',null);
         ulElement.appendChild(liElement);
         totalPrice+=jsWebPrice;
      }

      //price discounts      
      if (jsFund==true && jsAdv==true) {        
         let discount=jsAdvPrice*10/100;        
         totalPrice-=discount;         
      }      
      //TODO the upper discount have to be applied??
      if (jsFund==true && jsAdv==true && jsApp==true) {
         let discount=(jsFundPrice+jsAdvPrice+jsAppPrice)*6/100;
         totalPrice-=discount;
      }      
      if (jsFund==true && jsAdv==true && jsApp==true && jsWeb==true) {
         let liElement=e('li','HTML and CSS',null);
         ulElement.appendChild(liElement);
      }      
      if (online==true) {
         totalPrice-=totalPrice*6/100;
      }

      //update price
      let priceForDom=Math.round(totalPrice);
      document.querySelector('#myCourses > div.courseFoot > p').textContent=`Cost: ${priceForDom}.00 BGN`;
   }

   //factory function, create DOM element
   function e(type, content, className){
      const result= document.createElement(type);
      result.textContent=content;
      if (className) {
          result.className=className;
      }
      return result;
  }
}

solve();