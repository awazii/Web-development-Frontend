window.onload = () => {
    let game = ["snake", "water", "gun"];
    let score;
    let result = document.querySelector(".result");
    result.innerText=localStorage.getItem("result7")||"Result will Show here";
    let Reason = document.querySelector(".Reason")
    Reason.innerHTML = JSON.parse(localStorage.getItem("reason7")) || "Reason will Show here";

    try {
        score = JSON.parse(localStorage.getItem("save7")) || { draw: 0, Lose: 0, win: 0 };
    } catch (e) {
        score = { draw: 0, Lose: 0, win: 0 };
    }

    document.getElementById("Draw").innerText = score.draw;
    document.getElementById("LOSES").innerText = score.Lose;
    document.getElementById("WINS").innerText = score.win;

    window.snake = () => {
        let a = Math.floor(Math.random() * game.length);
        if (game[a] === game[0]) {
            Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[0]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`
            result.innerText = "MATCH DRAW"
            score.draw += 1;
            document.getElementById("Draw").innerText = score.draw;
        } else if (game[a] === game[2]) {
        Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[0]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`
            result.innerText = "You LOSE"
            score.Lose += 1;
            document.getElementById("LOSES").innerText = score.Lose;
        } else if (game[a] === game[1]) {
            Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[0]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "You WIN"
            score.win += 1;
            document.getElementById("WINS").innerText = score.win;
        }
        localStorage.setItem("save7", JSON.stringify(score));
        localStorage.setItem("result7",result.innerText)
        localStorage.setItem("reason7",JSON.stringify(Reason.innerHTML));
    };

    window.water = function () {
        let a = Math.floor(Math.random() * game.length);
        if (game[a] === game[2]) {
            Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[1]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "You WIN"
            score.win += 1;
            document.getElementById("WINS").innerText = score.win;
        } else if (game[a] === game[1]) {
           Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[1]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "MATCH DRAW"
            score.draw += 1;
            document.getElementById("Draw").innerText = score.draw;
        } else if (game[a] === game[0]) {
          Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[1]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "You LOSE"
            score.Lose += 1;
            document.getElementById("LOSES").innerText = score.Lose;
        }
        localStorage.setItem("save7", JSON.stringify(score));
        localStorage.setItem("result7",result.innerText);
        localStorage.setItem("reason7",JSON.stringify(Reason.innerHTML));
    };

    window.gun = function () {
        let a = Math.floor(Math.random() * game.length);
        if (game[a] === game[1]) {
           Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[2]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "You LOSE"
            score.Lose += 1;
            document.getElementById("LOSES").innerText = score.Lose;
        } else if (game[a] === game[0]) {
            Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[2]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "You WIN"
            score.win += 1;
            document.getElementById("WINS").innerText = score.win;
        } else if (game[a] === game[2]) {
            Reason.innerHTML = `You <img src="/Javascript Projects/part 7/snakewatergun/${game[2]}.png"  alt="Moves"> <img src="/Javascript Projects/part 7/snakewatergun/${game[a]}.png" alt="Moves">Computer`;
            result.innerText = "MATCH DRAW"
            score.draw += 1;
            document.getElementById("Draw").innerText = score.draw;
        }
        localStorage.setItem("save7", JSON.stringify(score));
        localStorage.setItem("result7",result.innerText);
        localStorage.setItem("reason7",JSON.stringify(Reason.innerHTML));
    };

    window.reset = function () {
        document.getElementById("WINS").innerText = 0;
        document.getElementById("Draw").innerText = 0;
        document.getElementById("LOSES").innerText = 0;
        score.win = 0;
        score.Lose = 0;
        score.draw = 0;
        localStorage.setItem("save7", JSON.stringify(score));
          result.innerText ="Result will Show here";
          Reason.innerText ="Reason will Show here" ;
        //  localStorage.setItem("result",result.innerText)
        //  localStorage.setItem("reason",Reason.innerText)
       localStorage.removeItem("result7");
       localStorage.removeItem("reason7");
    };
};