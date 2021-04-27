function solve(x1,y1,x2,y2){
    
    //Distance point A
    if (Number.isInteger(Math.sqrt(x1*x1+y1*y1))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    //Distance point B
    if (Number.isInteger(Math.sqrt(x2*x2+y2*y2))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    //Distance Point A to B    
    let distance = Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
    if (Number.isInteger(distance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }    
}

//разбира се, има и по-хлъзгаво решение с една вътрешна функция... но... когато работи не се пипа!

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);