function solveClasses(){

    class Person{
        constructor(firstName, lastName){
            this.firstName=firstName;
            this.lastName=lastName;
            this.problems=[];
        }
        toString(){
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
        }
    }

    class Teacher extends Person{
        constructor(firstName, lastName){
            super(firstName,lastName);
        }
        createProblem ( id, difficulty ){
            let problem={id:id, difficulty:difficulty};
            this.problems.push(problem);
            return this.problems;
        }
        getProblems(){
            return this.problems;
        }
        showProblemSolution(id){
            if (!this.problems.some(e=>e.id==id)) {
                throw new Error(`Problem with id ${id} not found.`);
            }
            let target=this.problems.find(e=>e.id==id);
            target.difficulty-=1;
            return target;
        }
    }

    class Student extends Person{
        constructor( firstName, lastName, graduationCredits, problems ){
            super(firstName,lastName);
            this.graduationCredits=graduationCredits;
            this.myCredits =0;
            this.solvedProblems=[];
            this.problems=problems;            
        }

        solveProblem(id){
            if (!this.problems.some(e=>e.id==id)) {
                throw new Error(`Problem with id ${id} not found.`);
            }
            let targetProblem=this.problems.find(e=>e.id==id);

            if (!this.solvedProblems.some(e=>e.id==id)) {
                this.myCredits+=targetProblem.difficulty;
                this.solvedProblems.push(targetProblem);
            }
            return this.myCredits;            
        }
        graduate(){
            if (this.myCredits>=this.graduationCredits) {
                return `${this.firstName} ${this.lastName} has graduated succesfully.`;
            }else{
                return `${this.firstName} ${this.lastName}, you need ${this.graduationCredits-this.myCredits} credits to graduate.`;
            }
        }
    }


    return {
        Person,
        Teacher,
        Student
    }
}

/*const classes = solveClasses();
const teacher = new classes.Teacher("Ivailo", "Papazov");
teacher.createProblem('as442df', 5);
console.log(teacher.problems);

teacher.createProblem('ffff44', 15);
console.log(teacher.problems);

teacher.showProblemSolution('as442df');
console.log(teacher.problems);*/

const classes = solveClasses();
const student = new classes.Student("Pesho", "Petrov", 23, [{id: '111', difficulty: 5}, {id: '222', difficulty: 15}]);

student.solveProblem('111');
console.log(student.myCredits);
console.log(student.graduate());

student.solveProblem('222');
console.log(student.solvedProblems);
console.log(student.graduate());