function solveClasses() {

    class Developer{
        constructor ( firstName, lastName ){
            this.firstName=firstName;
            this.lastName=lastName;
            this.baseSalary=1000;
            this.tasks=[];
            this.experience=0;
        }

        addTask(id, taskName, priority){
            let taskItem={id:id, taskName:taskName, priority:priority};
            if (priority=='high') {
                this.tasks.unshift(taskItem);
            }else{
                this.tasks.push(taskItem);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask(){
            //This method removes the newest task with the highest priority and returns the task's name.
            let newestTask={};
            let newestIndex=-1;
            for (let index = 0; index < this.tasks.length; index++) {               
                if (this.tasks[index].priority=='high') {
                    newestTask=this.tasks[index];
                    newestIndex=index;
                }
            }           
            if (this.tasks.length==0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }else{
                this.tasks.splice(newestIndex, 1);
                return newestTask.taskName;
            }
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }
        reviewTasks(){
            let result='Tasks, that need to be completed:\n';
            for (const item of this.tasks) {
                result+=`${item.id}: ${item.taskName} - ${item.priority}\n`;
            }
            return result.trimEnd();
        }
    }
    class Junior extends Developer{
        constructor(firstName, lastName, bonus, experience){
            super(firstName,lastName);
            this.baseSalary+=bonus;
            this.experience=experience;
        }
        learn( years ){
            this.experience+=years;
        }
    }
    class Senior extends Developer{
        constructor(firstName, lastName, bonus, experience){
            super(firstName,lastName);
            this.baseSalary+=bonus;
            this.experience=experience+5;
        }
        changeTaskPriority(taskId){
            let taskItem={};
            let taskIndex=-1;
            for (let index = 0; index < this.tasks.length; index++) {               
                if (this.tasks[index].id==taskId) {
                    taskItem=this.tasks[index];
                    taskIndex=index;
                }
            } 
            //remove the task
            this.tasks.splice(taskIndex, 1);
            //change priority and reorder
            if (taskItem.priority=='high') {
                taskItem.priority='low';
                this.tasks.push(taskItem);
            }else{
                taskItem.priority='high';
                this.tasks.unshift(taskItem);
            }
            return taskItem;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer);
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.addTask(5, "Update repository", "high"));
console.log(developer.addTask(3, "Update repository2", "low"));
console.log(developer.addTask(4, "Update repository3", "medium"));

developer.doTask();

console.log(developer.reviewTasks());
console.log(developer.getSalary());



const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
