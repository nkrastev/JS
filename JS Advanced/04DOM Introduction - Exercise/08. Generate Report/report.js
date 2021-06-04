function generateReport() {
    
    //set array of checkboxes with id, name and status
    let selection=Array.from(document.getElementsByTagName('input'));   

    let header=[];
    let data=[];

    //extract all table rows
    let rows=document.getElementsByTagName('table')[0].children[1].children;
    
    for (let index = 0; index < selection.length; index++) {
        header.push({id:index, name:selection[index].name, checked:selection[index].checked});        
    }
    
    for (let index = 0; index < rows.length; index++) {
        //get all td-s of current row
        let rowContent=rows[index].getElementsByTagName('td');
        let obj={};
        for (let i = 0; i < rowContent.length; i++) {            
            //filter by selection and add to object          
            if (header[i].checked==true) {
                //console.log(header[i].name+' '+rowContent[i].innerText);
                let propName=header[i].name;
                let propValue=rowContent[i].innerText;
                obj[header[i].name]=propValue;
            }
        }
        data.push(obj);
    }

    document.getElementById('output').value=JSON.stringify(data);

}