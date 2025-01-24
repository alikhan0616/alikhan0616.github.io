let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMsg = document.querySelector(".win-Msg")
let drawMsg = document.querySelector("#draw-Msg");
let winMsgold = winnerMsg.innerText;
let count = 0;
let turn0 = true;
let winningArr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn0){
            box.innerText = "O"
            box.style.color = "#111D4A"
            turn0 = false;
            count++;
        }
        else {
            box.innerText = "X";
            box.style.color = "#6B0504";
            turn0 = true;    
            count++;
        }
        box.disabled = true;
        checkWin();
    });
    
});

resetBtn.addEventListener("click" , () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        console.clear();
        winnerMsg.style.display = "none";
        winnerMsg.innerText = winMsgold
        drawMsg.style.display = "none";
        count = 0;
    });
});
const checkWin = () => {
    let isWin = false;
    for(pattern of winningArr) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3!= "") {
            if(pos1 === pos2 && pos2 === pos3 && pos3 === pos1){
                winnerMsg.innerText = winnerMsg.innerText + ` is ${pos1}`;
                winnerMsg.style.display = "block";
                disableBoxes();
                isWin = true;
                break;
            }
            }
        }  
        if (!isWin && count === 9)
            drawMsg.style.display = "block"; 
    }


