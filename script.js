const options = document.querySelectorAll("a");
const user = document.querySelector('.user')
const comp = document.querySelector('.comp')
const status = document.querySelector('.status')
const btn = document.querySelector('button')

const initialText = status.innerText

let userScore = compScore =  0;


const checkOutput = (wordGiven) => {
  let value = randomOutput();
  if (value === wordGiven) {
    // console.log(`Match draw, mine was ${value}.`);


    status.innerText =  `Match draw, mine was ${value}.`;
  } else if (value === "Scissors" && wordGiven === "Stone") {
    // console.log(`You win, mine was ${value}.`);


    status.innerText = `You win, mine was ${value}.`;
    userScore+= 1;
    user.innerText = userScore;
  } else if (value === "Stone" && wordGiven === "Paper") {
    // console.log(`You win, mine was ${value}`);


    status.innerText = `You win, mine was ${value}`;
    userScore += 1;
    user.innerText = userScore;
  } else if (value === "Paper" && wordGiven === "Scissors") {
    // console.log(`You win, mine was ${value}`);


    status.innerText = `You win, mine was ${value}`;
    userScore += 1;
    user.innerText = userScore;
  } else {
    // console.log(`I win, mine was ${value}`);


    status.innerText = `I win, mine was ${value}`;
    compScore += 1;
    comp.innerText = compScore;
  }
};

const randomOutput = () => {
  let random = Math.random();
  if (random < 0.3) {
    return "Scissors";
  } else if (random >= 0.3 && random < 0.6) {
    return "Paper";
  } else {
    return "Stone";
  }
};


options.forEach((option) => {
  option.addEventListener("click", (event) => {
    checkOutput(event.target.innerText);
  });
});

btn.addEventListener('click', () =>{
  userScore = compScore = 0;
  user.innerText = comp.innerText = '0'
  status.innerText = initialText;
})