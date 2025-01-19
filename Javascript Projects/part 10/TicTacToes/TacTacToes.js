let count = null;
let x = document.querySelector(".p1")
let o = document.querySelector(".p2")
let draw = document.querySelector(".draw")
let xwincount = 0
let owincount = 0
let drawcount = 0
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let box = document.querySelectorAll(".box")
box.forEach((element) => {
    element.addEventListener("click", (e) => {
        clicked(e)
    })
});
let clicked = (e) => {
    if (!count) {
        e.target.innerHTML = 'X';
        count = true
    }
    else if (count) {
        e.target.innerHTML = 'O';
        count = null
    }
    e.target.style.pointerEvents = 'none';// to disable any mouse interaction using css just wow man
    winner()
}
let reset = () => {
    box.forEach(element => {
        element.innerHTML = ""
        element.style.pointerEvents = 'auto'

    });
}
let winner = () => {
    let isDraw = true;
    for (const element of winningPattern) {
        let a = box[element[0]].innerHTML;
        let b = box[element[1]].innerHTML;
        let c = box[element[2]].innerHTML;
        if (a !== "" && b !== "" && c !== "") {
            if (a === b && b === c) {
                if (a === 'X') {
                    xwincount++;
                    console.log(x); 
                    x.innerHTML = xwincount;
                }
                else if (a === 'O') {
                    owincount++;
                    o.innerHTML = owincount;
                }
                console.log(`Winner is ${a}`); 
                setTimeout(reset,400)
                return;
            }
        }
        else {
            isDraw = false;
        }
    }
    if (isDraw) {
        drawcount++;
        draw.innerHTML = drawcount;
        console.log("It's a draw!");
        setTimeout(reset,500)
    }
};
document.querySelector(".resetgame").addEventListener("click",()=>{
    reset();
})
document.querySelector(".resetscore").addEventListener("click",()=>{
     xwincount = 0
     owincount = 0
     drawcount = 0
     x.innerHTML = xwincount;
     o.innerHTML = owincount;
     draw.innerHTML = drawcount;
})