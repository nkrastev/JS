function pnl() {
    const bntGenerate=document.querySelector('#data > button');
    bntGenerate.addEventListener('click', onClickGenerate);

    let pax=[]; //array of objects with first and last

    function onClickGenerate(event) {
        event.preventDefault();//prevent page from reloading
        
        //we assume the data is valid
        let data=document.querySelector('#data > textarea').value.split('\n');
        for (let line of data) {
            line=line.trimEnd();
            
            let names=line.split(/ (.+)/);
            const last=names[0];
            const first=names[1];
            
            pax.push({first:first, last:last});
        }

        //generate table
        let table=document.createElement('table');
        
        pax=pax.reverse();

        for (const item of pax) {
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = item.first;
            cell2.innerHTML = item.last;
        }

        document.querySelector('#result').appendChild(table);
        document.querySelector('#data > textarea').value='';
    }
}