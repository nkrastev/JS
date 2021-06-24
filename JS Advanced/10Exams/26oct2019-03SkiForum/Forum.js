class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }
 
    register(username, password, repeatPassword, email) {
        if (!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty");
        }
 
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }
 
        let exists = this._users.find(us => us.username == username || us.email == email);
        if (exists) {
            throw new Error("This user already exists!");
        }
 
        this._users.push({ username, password, email });
        return `${username} with ${email} was registered successfully!`;
    }
 
    login(username, password) {
        let user = this._users.find(us => us.username == username);
 
        if (!user) {
            throw new Error("There is no such user");
        }
 
        if (user.password !== password) {
            return;
        }
        user.log = true;
        return "Hello! You have logged in successfully";
    }
 
    logout(username, password) {
        let user = this._users.find(us => us.username == username);
 
        if (!user) {
            throw new Error("There is no such user");
        }
 
        if (user.password !== password) {
            return;
        }
        user.log = false;
        return "You have logged out successfully";
    }
 
    postQuestion(username, question) {
        let user = this._users.find(us => us.username == username);
 
        if (!user || !user.log) {
            throw new Error("You should be logged in to post questions");
        }
 
        if (question === '') {
            throw new Error("Invalid question");
        }
 
        this._questions.push({ id: this._id, username: user.username, question, answers: [] });
 
        this._id++;
 
        return "Your question has been posted successfully";
    }
 
    postAnswer(username, questionId, answer) {
        let responder = this._users.find(us => us.username == username);
 
        if (!responder || !responder.log) {
            throw new Error("You should be logged in to post answers");            
        }
 
        if (answer === '') {
            throw new Error("Invalid answer");
        }
 
        let question = this._questions.find(q => q.id == questionId);
 
        if (!question) {
            throw new Error("There is no such question");
        }
 
        let currAnswer = { username, content: answer, };
        question.answers.push(currAnswer);
 
        return "Your answer has been posted successfully";
    }
 
    showQuestions() {
        let output = '';
 
        this._questions.forEach(q => {
            output += `Question ${q.id} by ${q.username}: ${q.question}\n`;
 
            q.answers.forEach(an => {
                output += `---${an.username}: ${an.content}\n`;
            });
 
        });
 
        return output.trim();
    }
}