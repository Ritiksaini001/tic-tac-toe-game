let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let winnerCont = document.querySelector(".winner-cont");

let turn = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  let turn = true;
  enableBtn();
  winnerCont.classList.add("hide");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn == true) {
      button.innerText = "X";
      turn = false;
    } else {
      button.innerText = "O";
      turn = true;
    }

    button.disabled = true;

    checkWinner();
  });
});

const enableBtn = () => {
  for (const btn of buttons) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const disableBtn = () => {
  for (const btn of buttons) {
    btn.disabled = true;
  }
};

const showMsg = (winner) => {
  msg.innerText = `congratulation ${winner} ,you win`;
  winnerCont.classList.remove("hide");
  disableBtn();
};

const checkWinner = () => {
  for (const pattren of winPatterns) {
    let val1 = buttons[pattren[0]].innerText;
    let val2 = buttons[pattren[1]].innerText;
    let val3 = buttons[pattren[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner");
        showMsg(val1);
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);
