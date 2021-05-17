function heroicInventory(input){

    let result=[];

    for (let index = 0; index < input.length; index++) {
        let [name, level, items]=input[index].split(' / ');
        level=Number(level);

        items=items ? items.split(', ') : [];

        result.push({name, level, items});                
    }

    console.log(JSON.stringify(result));

}