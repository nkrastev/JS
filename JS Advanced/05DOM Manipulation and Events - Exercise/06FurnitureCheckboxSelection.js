function solve() {
  
    let btnGenerate=document.getElementsByTagName('button')[0];
    let btnBuy=document.getElementsByTagName('button')[1];

    btnGenerate.addEventListener('click', onClickGenerate);
    btnBuy.addEventListener('click', onClickBuy);

    const table=document.querySelector('.table tbody');

    function onClickGenerate() {                      
        //TODO check the input JSON validity?
        const input=JSON.parse(document.getElementsByTagName('textarea')[0].value);
        
        for (const item of input) {
            //create new TR in tbody with data from the object 
            let tr = document.createElement('tr');
            table.appendChild(tr);

            //can be done with FOREACH on object properties... or with another function
            let tdData=document.createElement('td');
            tdData.innerHTML='<img src="'+item.img+'"/>';
            tr.appendChild(tdData);

            tdData=document.createElement('td');
            tdData.textContent=item.name;            
            tr.appendChild(tdData);

            tdData=document.createElement('td');
            tdData.textContent=item.price;            
            tr.appendChild(tdData);

            tdData=document.createElement('td');
            tdData.textContent=item.decFactor;            
            tr.appendChild(tdData);

            tdData=document.createElement('td');
            tdData.innerHTML='<input type="checkbox" />';
            tr.appendChild(tdData);


        }
    }
    //TODO what if another generate is clicked after event listener for checkboxes
    //TODO what if checkbox is clicked twice???

    //add event on each checkbox

    function onClickBuy() {       

        let checkboxes=Array.from(document.querySelectorAll("input[type=checkbox]"));
        let names=[];
        let price=0;
        let sumFactor=0;
        let factorCount=0;

        for (const box of checkboxes) {
            if (box.checked==true) {
                const selectedRow=box.parentNode.parentNode;
                const itemTds=selectedRow.getElementsByTagName('td');

                names.push(itemTds[1].textContent);
                price+=Number(itemTds[2].textContent);
                sumFactor+=Number(itemTds[3].textContent);
                factorCount++;
            }
        }
        let decFactor=sumFactor/factorCount;

        //print output
        let output='Bought furniture: '+names.join(', ')+'\n';
        output+=`Total price: ${price.toFixed(2)}\n`;
        output+=`Average decoration factor: ${decFactor}`;

        document.getElementsByTagName('textarea')[1].value=output;
        
    }

}