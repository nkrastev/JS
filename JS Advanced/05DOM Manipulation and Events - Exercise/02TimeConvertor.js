function attachEventsListeners() {

    let btnDays=document.getElementById('daysBtn');
    btnDays.addEventListener('click', onClickDays);

    let btnHours=document.getElementById('hoursBtn');
    btnHours.addEventListener('click', onClickHours);

    let btnMins=document.getElementById('minutesBtn');
    btnMins.addEventListener('click', onClickMinutes);

    let btnSecs=document.getElementById('secondsBtn');
    btnSecs.addEventListener('click', onClickSeconds);



    function onClickDays(event){
        let days=Number(document.getElementById('days').value);

        document.getElementById('hours').value=24*days;
        document.getElementById('minutes').value=24*60*days;
        document.getElementById('seconds').value=24*60*60 *days;
    }

    function onClickHours(event){
        let hours=Number(document.getElementById('hours').value);

        document.getElementById('days').value=hours / 24;
        document.getElementById('minutes').value=60*hours;
        document.getElementById('seconds').value=60*60 *hours;
    }

    function onClickMinutes(event){
        let minutes=Number(document.getElementById('minutes').value);

        document.getElementById('days').value=minutes / 60/24;
        document.getElementById('hours').value=minutes / 60;
        document.getElementById('seconds').value=60 *minutes;
    }

    function onClickSeconds(event){
        let seconds=Number(document.getElementById('seconds').value);

        document.getElementById('days').value=seconds / 24/60/60;
        document.getElementById('hours').value=seconds / 60/60;
        document.getElementById('minutes').value=seconds / 60;
    }

}