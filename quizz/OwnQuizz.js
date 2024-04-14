const questions = [
  {
    question : "What is My Name?",
    answer : [
      {text:"Soham" , context:"false"},
      {text:"Shan" , context:"false"},
      {text:"Mohan" , context:"false"},
      {text:"Sohan" , context:"true"},
    ]
  },
  {
    question : "Where do i stay?",
    answer : [
      {text:"Hyderabad" , context:"true"},
      {text:"Chenni" , context:"false"},
      {text:"Karnataka" , context:"false"},
      {text:"Mumbai" , context:"false"},
    ]
  },
  {
    question : "What is My Phone Number?",
    answer : [
      {text:"9345678454" , context:"false"},
      {text:"9345123454" , context:"false"},
      {text:"9695638254" , context:"false"},
      {text:"9347500901" , context:"true"},
    ]
  },
  {
    question : "Where did I Studied?",
    answer : [
      {text:"Sri Sathya Sai Vidhya Vihar High School" , context:"true"},
      {text:"Narayana High School" , context:"false"},
      {text:"Chataniya High School" , context:"false"},
      {text:"Bachpan High School" , context:"false"},
    ]
  },
];



const QuestionElement = document.querySelector(".question");
const AnswerElement = document.querySelector(".answerbtn");
const NextElement = document.querySelector(".next_btn");


let QuestionIndex = 0;
let score =0;

function resetOptions(){
  NextElement.style.display = "none";

  while(AnswerElement.firstChild)
  {
    AnswerElement.removeChild(AnswerElement.firstChild);
  }
}


function startQuizz(){
  let QuestionIndex = 0;
  let score =0;
  NextElement.innerHTML = "Next";
  showQuestion();

}
function showQuestion()
{
  resetOptions();
  let currentQuestion = questions[QuestionIndex];
  
  let questionNumber = QuestionIndex+1;
  QuestionElement.innerHTML = questionNumber+"."+currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer_btn");
    AnswerElement.appendChild(button);
    if(answer.context){
      button.dataset.context = answer.context;
    }
    button.addEventListener("click",selectAnswer);
  });

}

function selectAnswer(e){

  const button_Data = e.target;
  const isCorrect = button_Data.dataset.context ==='true';
  if(isCorrect) 
  {
    button_Data.classList.add("correct");
    score++;
  }
  else
  {
    button_Data.classList.add("incorrect");
  }
  Array.from(AnswerElement.children).forEach(button =>{
    if(button.dataset.context=== "true")
    {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  NextElement.style.display = "block";
}
NextElement.addEventListener("click",()=>{
  if(QuestionIndex < questions.length)
  {
    handleNextQuestion();
  }
  else{
    startQuizz();
  }
})

function handleNextQuestion(){
  QuestionIndex++;
  if(QuestionIndex < questions.length)
  {
    showQuestion();
  }
  else{
    showScore();
  }
}

function showScore()
{
  resetOptions();
  QuestionElement.innerHTML = `Your Score is ${score} Out of ${questions.length} `;
  NextElement.innerHTML = "Play Again";
  NextElement.style.display = "block";
  
}





startQuizz();