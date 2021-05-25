function attachEventsListeners() {
    const btn=document.getElementById('convert');
    btn.addEventListener('click', onClickConvert);

    function onClickConvert() {
        let input=document.getElementById('inputDistance').value;
        if (input!='') {
            //data is entered, convert to num
            let units=Number(input);

            let inputUnits=document.getElementById('inputUnits').value;
            let outputUnits=document.getElementById('outputUnits').value;

            let totalMeters=0;
            //convert input to M
            if (inputUnits==='km') {
                totalMeters=units*1000;
            }else if(inputUnits==='m'){
                totalMeters=units*1;
            }else if (inputUnits==='cm') {
                totalMeters=units*0.01;
            }else if (inputUnits==='mi') {
                totalMeters=units* 1609.34;
            }else if (inputUnits==='yrd') {
                totalMeters=units* 0.9144;
            }else if (inputUnits==='ft') {
                totalMeters=units*0.3048;
            }else if (inputUnits==='in') {
                totalMeters=units*0.0254;
            }else if (inputUnits==='mm') {
                totalMeters=units*0.001;
            }

            //console.log(totalMeters)
            let result=0;

            //convert
            if (outputUnits==='km') {
                result=totalMeters/1000;
            }else if(outputUnits==='m'){
                result=totalMeters/1;
            }else if (outputUnits==='cm') {
                result=totalMeters/0.01;
            }else if (outputUnits==='mi') {
                result=totalMeters/ 1609.34;
            }else if (outputUnits==='yrd') {
                result=totalMeters/ 0.9144;
            }else if (outputUnits==='ft') {
                result=totalMeters/ 0.3048;
            }else if (outputUnits==='in') {
                result=totalMeters/ 0.0254;
            }else if (outputUnits==='mm') {
                result=totalMeters/0.001;
            }


            document.getElementById('outputDistance').value=result;
        }
    }
}