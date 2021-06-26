function solve() {
    let lectureName = document.querySelector('input[name="lecture-name"]');
    let lectureDate = document.querySelector('input[name="lecture-date"]');
    let lectureModule = document.querySelector('select[name="lecture-module"]');
    let addButton = document.querySelector('form button');
    let modulesElement = document.querySelector('.modules');
 
    let trainings = {};
    //2021-06-02T13:25
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
 
        if(lectureName.value != '' && lectureDate.value != '' && lectureModule.value != 'Select module'){
            if(!trainings[lectureModule.value]){
                trainings[lectureModule.value] = [];
            }
    
            let currentLecture = {name: lectureName.value, date: formatDate(lectureDate.value)}
            trainings[lectureModule.value].push(currentLecture);
    
            modulesElement.innerHTML = '';
    
            for (const key in trainings) {
                let lectures = trainings[key];
                
                let divModule = document.createElement('div');
                divModule.className = 'module'
                let h3 = document.createElement('h3');
                h3.textContent = key.toUpperCase() + '-MODULE';
    
                let ul = document.createElement('ul');
    
                lectures
                    .sort((a,b) => a.date.localeCompare(b.date))
                    .forEach(({name, date}) => {
                        let li = document.createElement('li');
                        li.className = 'flex';
    
                        let h4 = document.createElement('h4');
                        h4.textContent = `${name} - ${date}`;
    
                        let delBtn = document.createElement('button');
                        delBtn.textContent = 'Del'
                        delBtn.className = 'red';
                        //write del logic
                        delBtn.addEventListener('click', (e) => {
                            
                            let liElement = e.currentTarget.parentElement;
                            let h4 = liElement.querySelector('h4');
                            let name = h4.textContent.split(' - ')[0];
                            let date = h4.textContent.split(' - ')[1] + ' - ' + h4.textContent.split(' - ')[2];
    
                            let delLec = lectures.find(x => x.name == name && x.date == date);
                            lectures.splice(lectures.indexOf(delLec), 1);
    
                            if(lectures.length == 0){
                                e.currentTarget.parentElement.parentElement.parentElement.remove();
                                delete trainings[key];
                            } else {
                                e.currentTarget.parentElement.remove();
                            }
         
                        });
    
                        li.appendChild(h4);
                        li.appendChild(delBtn);
    
                        ul.appendChild(li);
    
                    });
    
                divModule.appendChild(h3);
                divModule.appendChild(ul);
                modulesElement.appendChild(divModule);
            }
        }          
    });
 
    function formatDate(input){
        let [date, time] = input.split('T');
        date = date.replace(/-/g, '/');
 
        return `${date} - ${time}`;
    } 
 
}