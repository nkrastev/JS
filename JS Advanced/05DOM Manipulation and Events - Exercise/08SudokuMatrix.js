function solve() {
    
    let table=document.getElementsByTagName('table')[0];
    let result=document.querySelectorAll('#check p')[0];
    let elements=document.querySelectorAll('input');

    let btnCheck=document.getElementsByTagName('button')[0];
    let btnClear=document.getElementsByTagName('button')[1];

    btnCheck.addEventListener('click', onClickCheckMatrix);
    btnClear.addEventListener('click', onClickClear);

    function onClickCheckMatrix() {                           
        let matrix = [
            [elements[0].value, elements[1].value, elements[2].value],
            [elements[3].value, elements[4].value, elements[5].value],
            [elements[6].value, elements[7].value, elements[8].value]
        ];
        let isValid = true;
        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            table.style.border='2px solid green';
            result.style.color='green';
            result.textContent='You solve it! Congratulations!';
        }else{
            table.style.border='2px solid red';
            result.style.color='red';
            result.textContent='NOP! You are not done yet...';
        }
    }

    function onClickClear() {
        for (let item of elements) {
           item.value='' ;
        }
        table.style.border='';
        result.style.color='';
        result.textContent='';
    }

}