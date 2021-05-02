function stars(input){
    
    if(! input ){
        input=5
    }

    for(i=1;i<=input;i++){
        let currentRow='';
        for(j=1;j<=input;j++){
            currentRow = currentRow+'* ';
        }
        console.log(currentRow);
    }    

}