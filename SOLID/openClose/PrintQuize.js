class BooleanQuestion {
    constructor(desc) {
        this.desc = desc;
    }

    printQuestionChoices() {
        console.log('1. true');
        console.log('2. false');
    }
}
class RangQuestion {
    constructor(desc) {
        this.desc = desc;
    }

    printQuestionChoices() {
        console.log('Minimum:___________________________');
        console.log('Maximum:___________________________');
    }
}
class MultipleChoiceQuestion {
    constructor(desc, options) {
        this.desc = desc;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index)=>{
            console.log(`${index+1}. ${option}`);
        });
    }
}
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.desc);
        question.printQuestionChoices();
        console.log('');
    });
}

const questions = [
    new BooleanQuestion('Is this video useful ?'),
    new MultipleChoiceQuestion('What is your favorite Language?', ['Javascript', 'Java', 'html', 'css']),
    new RangQuestion('What is the speed limit in your city?')
];

 printQuiz(questions);

//OLD code without OPEN/CLOSE Principle 
// class Quiz {
//     constructor(questions){
//     this.questions = questions;
//     }
//     printQuiz(){
//         this.questions.forEach(question =>{
//             console.log(question.desc);
//             switch(question.type){
//                 case 'boolean': 
//                 console.log('1. True');
//                 console.log('2. True');
//                 break;
//                 case 'multipleChoice': 
//                 question.options.forEach((option, index)=>{
//                     console.log(`${index+1}. ${option}`);
//                 });
//                 break;
//                 case 'text': 
//                 console.log('Answer: _____________');
//                 break;
//             }
//             console.log('');
//         });
//     }
// }

// const questions = [
// {
//     type: 'boolean',
//     desc: 'This video is useful.'
// },
// {
//     type: 'multipleChoice',
//     desc: 'What is your favorite language?',
//     options: ['CSS', 'HTML', 'JS','Python']
// },
// {
//     type: 'text',
//     desc: 'Describe your favorite JS feature.'
// }
// ]
// new Quiz(questions).printQuiz();