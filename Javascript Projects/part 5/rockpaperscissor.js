  let game = ["rock", "Paper", "scissors"];
  let player=["you","Computer"]
    let score,flag,jj;
    let result = document.querySelector(".result");
    result.innerText=localStorage.getItem("result")||"Result will Show here";
    let Reason = document.querySelector(".Reason")
    Reason.innerHTML = localStorage.getItem("reason") ? JSON.parse(localStorage.getItem("reason")) : "Reason will Show here";

    try {
        score = JSON.parse(localStorage.getItem("save")) || { draw: 0, Lose: 0, win: 0 };
    } catch (e) {
        score = { draw: 0, Lose: 0, win: 0 };
    }

    document.getElementById("Draw").innerText = score.draw;
    document.getElementById("LOSES").innerText = score.Lose;
    document.getElementById("WINS").innerText = score.win;

        rock = (play) => {
        let a = Math.floor(Math.random() * game.length);
        if (game[a] === game[0]) {
            Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[0]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`
            result.innerText = "MATCH DRAW"
            score.draw += 1;
            document.getElementById("Draw").innerText = score.draw;
        } else if (game[a] === game[1]) {
        Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[0]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`
            result.innerText = "You LOSE"
            score.Lose += 1;
            document.getElementById("LOSES").innerText = score.Lose;
        } else if (game[a] === game[2]) {
            Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[0]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
            result.innerText = "You WIN"
            score.win += 1;
            document.getElementById("WINS").innerText = score.win;
        }
        localStorage.setItem("save", JSON.stringify(score));
        localStorage.setItem("result",result.innerText)
        localStorage.setItem("reason",JSON.stringify(Reason.innerHTML));
             
    };

        paper = (play)=> {
                let a = Math.floor(Math.random() * game.length);
                if (game[a] === game[0]) {
                    Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[1]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
                    result.innerText = "You WIN"
                    score.win += 1;
                    document.getElementById("WINS").innerText = score.win;
                } else if (game[a] === game[1]) {
                   Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[1]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
                    result.innerText = "MATCH DRAW"
                    score.draw += 1;
                    document.getElementById("Draw").innerText = score.draw;
                } else if (game[a] === game[2]) {
                  Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[1]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
                    result.innerText = "You LOSE"
                    score.Lose += 1;
                    document.getElementById("LOSES").innerText = score.Lose;
                }
                localStorage.setItem("save", JSON.stringify(score));
                localStorage.setItem("result",result.innerText);
                localStorage.setItem("reason",JSON.stringify(Reason.innerHTML));
    };

       scissor=(play) =>{
            let a = Math.floor(Math.random() * game.length);
        if (game[a] === game[0]) {
           Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[2]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
            result.innerText = "You LOSE"
            score.Lose += 1;
            document.getElementById("LOSES").innerText = score.Lose;
        } else if (game[a] === game[1]) {
            Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[2]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
            result.innerText = "You WIN"
            score.win += 1;
            document.getElementById("WINS").innerText = score.win;
        } else if (game[a] === game[2]) {
            Reason.innerHTML = `${play} <img src="/Javascript Projects/part 5/${game[2]}-emoji.png"  alt="Moves"> <img src="/Javascript Projects/part 5/${game[a]}-emoji.png" alt="Moves">Computer`;
            result.innerText = "MATCH DRAW"
            score.draw += 1;
            document.getElementById("Draw").innerText = score.draw;
        }
        localStorage.setItem("save", JSON.stringify(score));
        localStorage.setItem("result",result.innerText);
        localStorage.setItem("reason",JSON.stringify(Reason.innerHTML));
    };

     reset =()=> {
            document.getElementById("WINS").innerText = 0;
            document.getElementById("Draw").innerText = 0;
            document.getElementById("LOSES").innerText = 0;
            score.win = 0;
            score.Lose = 0;
            score.draw = 0;
            localStorage.setItem("save", JSON.stringify(score));
              result.innerText ="Result will Show here";
              Reason.innerText ="Reason will Show here" ;
            //  localStorage.setItem("result",result.innerText)
            //  localStorage.setItem("reason",Reason.innerText)
           localStorage.removeItem("result");
           localStorage.removeItem("reason");
    };
    let Autoplay=()=>{
        let Computer=Math.floor(Math.random() * game.length);
        if (game[Computer]===game[0]) {
            rock(player[1])
        }else
        if(game[Computer]===game[2]){
            scissor(player[1])
        }
        else if(game[Computer]===game[1]){
            paper(player[1])
        }
        console.log(Computer)
    }
Auto=()=>{
    if (!flag) {
        jj=setInterval(Autoplay,1000)
        flag=1
        document.querySelector(".Auto").innerHTML="Stop Autoplay"
    }
    else{
        clearInterval(jj)
        document.querySelector(".Auto").innerHTML="Autoplay"
        flag=null
    }
}
document.body.addEventListener("keydown",(event)=>{
if (event.key==="r"||event.key==="R") {
    rock(player[0])
}
else if(event.key==="p"||event.key==="P"){
    paper(player[0])
}
else if (event.key==="s"||event.key==="S") {
    scissor(player[0])
}
})