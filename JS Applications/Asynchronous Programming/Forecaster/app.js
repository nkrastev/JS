function attachEvents() {
    const btnGet=document.querySelector('#submit');
    const locationName=document.querySelector('#location');
    const url='http://localhost:3030/jsonstore/forecaster/locations';
    btnGet.addEventListener('click', onGetForecast);    

    const symbolItems={
        'Sunny':'&#x2600;',
        'Partly sunny':'&#x26C5;',
        'Overcast':'&#x2601;',
        'Rain':'&#x2614;',
        'Degrees':'&#176;',
    }

    async function onGetForecast(event) {
        if (locationName.value=='' || locationName.value==undefined) {
            return;
        }        
        //always will be valid, exept if problem with server
        try {            
            const response = await fetch(url);
            const data = await response.json();
               
            let target=data.find(e=>e.name==locationName.value);
            if (target) {
                //code is found, 2 more requests (target.code)
                
                //current forecase
                try {
                    const resCurrent = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${target.code}`);
                    const dataItem = await resCurrent.json();
                    clearDivForDataEntry();
                    let divCurrent=document.querySelector('#current');
                    
                    let divForecasts=e('div',null,'forecasts');                    
                    let spanConditionSymbol=e('span',null,'condition');
                    let spanConditions=e('span',null,'condition');
                    let span1=e('span',dataItem.name,'forecast-data');
                    let span2=e('span',dataItem.forecast.low+'°/'+dataItem.forecast.high+'°','forecast-data');
                    let span3=e('span',dataItem.forecast.condition,'forecast-data');

                    spanConditions.appendChild(span1);
                    spanConditions.appendChild(span2);
                    spanConditions.appendChild(span3);

                    spanConditionSymbol.classList.add('symbol');
                    spanConditionSymbol.innerHTML=symbolItems[dataItem.forecast.condition];

                    divForecasts.appendChild(spanConditionSymbol);
                    divForecasts.appendChild(spanConditions);                
                    
                    divCurrent.appendChild(divForecasts);                                                                           
                    
                } catch (error) {
                    postErrorToDom();
                }

                //3day forecast
                try {
                    const res3day = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${target.code}`);
                    const threeDay = await res3day.json();
                    console.log(threeDay);
                    let divUpcoming=document.querySelector('#upcoming');                
                    let divForecastInfo=e('div',null,'forecast-info');
                    divUpcoming.appendChild(divForecastInfo);

                    threeDay.forecast.forEach(element => {
                       let mainSpan=e('span',null,'upcoming');
                       let span1=e('span',null,'symbol');
                       span1.innerHTML=symbolItems[element.condition];                       

                       mainSpan.appendChild(span1);
                       mainSpan.appendChild(e('span',element.low+'°/'+element.high+'°','forecast-data'));
                       mainSpan.appendChild(e('span',element.condition,'forecast-data'));

                       divForecastInfo.appendChild(mainSpan);
                    });
                    
                } catch (error) {
                    postErrorToDom();
                }

                

            }else{
                postErrorToDom();
            }
        } catch (error) {
            postErrorToDom();            
        }        
    }

    function postErrorToDom(){
        document.querySelector('#forecast').style.display='block';
        document.querySelector('#forecast').innerHTML='ERROR';
    }
    function clearDivForDataEntry() {
        document.querySelector('#forecast').style.display='block';
        document.querySelector('#forecast').innerHTML='<div id="current"><div class="label">Current conditions</div></div><div id="upcoming"><div class="label">Three-day forecast</div></div>';
    }    
    
    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }
}

attachEvents();