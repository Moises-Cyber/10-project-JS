const quizData =[
    {
        question: 'How many expansions has FFXIV?',
        a:'5',
        b:'4',
        c:'3',
        d:'2',
        correct:'b',

    }, {
        question: "What was the year's game in 2017?",
        a:'The Legend of Zelda: Breath of the Wild',
        b:'Persona 5',
        c:'Super Mario Odyssey ',
        d:'Nier: Automata',
        correct:'a',
    }, {
        question: 'How many jobs has FFXIV?',
        a:'18',
        b:'17',
        c:'20',
        d:'19',
        correct:'c',
    }, {
        question: "What's the best race in FFXIV?",
        a:"Miqo'te",
        b:'Viera',
        c:'Elezen',
        d:'Lalafell',
        correct:'d'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl= document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
        answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            alert('You finished! Get yourself an avocado!')
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
} );