function sumTable() {
    
    let tableItem = document.querySelectorAll("table tr");

    let total=0;

    for (let i = 1; i < tableItem.length; i++) {
        let cols = tableItem[i].children;
        let cost = cols[cols.length - 1].textContent;
        //console.log(cost);
        total += Number(cost);
    }

    document.getElementById('sum').textContent=total;


}