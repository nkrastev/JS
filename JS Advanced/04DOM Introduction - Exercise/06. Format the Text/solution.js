function solve() {
  let content=document.getElementById('input').value;
  //let sentences=content.split('.');

  var sentences = content.split(".").map(function(item) {
    return item.trim();
  });

  let formatedText='';  

  //remove empty items
  sentences = sentences.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});

  //console.log(sentences);

  while (sentences.length>=3) {
    let temp1=sentences.shift();
    let temp2=sentences.shift();
    let temp3=sentences.shift();

    formatedText+=`<p>${temp1}. ${temp2}. ${temp3}.</p>`;
    //console.log(sentences.length);
  }

  //add last less than 3 sentences
  if (sentences.length>0) {
    formatedText+='<p>';
    while (sentences.length>0) {
        formatedText+=sentences.shift()+'. ';    
    }
    formatedText+='</p>';
  }
    
  //console.log(formatedText);

  document.getElementById('output').innerHTML=formatedText;
}