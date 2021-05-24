function attachGradientEvents() {
    
    let area = document.getElementById('gradient');

    area.addEventListener('mousemove', onMoveHandler);
    
    function onMoveHandler(event){      
        
        let positionInPercent= event.offsetX / area.clientWidth * 100;
        document.getElementById('result').textContent=Math.floor(positionInPercent)+'%';
        
    }    
}