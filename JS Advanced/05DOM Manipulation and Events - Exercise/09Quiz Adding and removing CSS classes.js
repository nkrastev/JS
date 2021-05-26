function solve() {

    //style.display=none и добавянето на клас hidden би трябвало да е едно и също...

    let points=0;

    let sections=document.querySelectorAll('section');

    let ans1=document.getElementsByClassName('answer-wrap')[0];
    let ans2=document.getElementsByClassName('answer-wrap')[1];
    let ans3=document.getElementsByClassName('answer-wrap')[2];
    let ans4=document.getElementsByClassName('answer-wrap')[3];
    let ans5=document.getElementsByClassName('answer-wrap')[4];
    let ans6=document.getElementsByClassName('answer-wrap')[5];

    ans1.addEventListener('click', onClick1);
    ans2.addEventListener('click', onClick2);
    ans3.addEventListener('click', onClick3);
    ans4.addEventListener('click', onClick4);
    ans5.addEventListener('click', onClick5);
    ans6.addEventListener('click', onClick6);
    
    function onClick1() {
        points++;
        sections[0].classList.add('hidden');        
        sections[0].style.display='none';
        sections[1].style.display='block';
    }
    function onClick2(){
        sections[0].classList.add('hidden');    
        sections[0].style.display='none';    
        sections[1].style.display='block';
    }
    function onClick3(){
        sections[1].classList.add('hidden');  
        sections[1].style.display='none';      
        sections[2].style.display='block';
    }
    function onClick4(){
        points++;
        sections[1].style.display='none';      
        sections[1].classList.add('hidden');        
        sections[2].style.display='block';
    }
    function onClick5(){
        points++;
        sections[2].style.display='none';      
        
        printResults();
    }
    function onClick6(){
        sections[2].style.display='none';      
        
        printResults();
    }

    function printResults() {
        let block=document.getElementById('results');
        block.style.display='block';
        let message='';
        if (points===3) {
            message='You are recognized as top JavaScript fan!';
        }else{
            message=`You have ${points} right answers`;
        }        
        block.getElementsByTagName('h1')[0].textContent=message;
        

    }
}
