function solve() {
  let input=document.getElementById('text').value;
  let naming=document.getElementById('naming-convention').value;

  let resultSpan='Error!';

  if (naming==='Camel Case') {
    resultSpan='';
    let arr=input.split(' ');
    for (let index = 0; index < arr.length; index++) {     
      if (index==0) {        
        resultSpan+=arr[index].toLowerCase();
      }else{
        resultSpan+=arr[index].charAt(0).toUpperCase() + arr[index].toLowerCase().slice(1);
      }       
    }
  }else if (naming==='Pascal Case') {
    resultSpan='';
    let arr=input.split(' ');
    for (let index = 0; index < arr.length; index++) {      
        resultSpan+=arr[index].charAt(0).toUpperCase() + arr[index].toLowerCase().slice(1);            
    }
  }

  document.getElementById('result').textContent=resultSpan;
}