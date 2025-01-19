let aa;
        console.log(String(25))
        console.log("25" - 5)
        console.log("25" * 5)
        console.log("25" / 5)
        let Calcu;
        let Calcu1;
        let a = localStorage.getItem("saving") || "0";
        console.log(a)
        document.querySelector('.calculator').innerText = a
        let checker;
        let checker1 = 1;
        let enter = (a) => {
            if (a.key === 'Enter') {
                Cal()
            }
        }
        let Subscribe = () => {
            let a = document.querySelector(".Jsbutton")
            if (a.innerText === "Subscribe") {
                a.innerHTML = "Subscribed";
                a.classList.add("is-sub");
            }
            else {
                document.querySelector(".Jsbutton").innerHTML = "Subscribe"
                a.classList.remove("is-sub");
            }
        }
        let Cal = () => {
            let input = document.querySelector(".input");
            calcu = Number(input.value);
            if (input.value < 40 && input.value >0) {
                calcu += 10;
                calcu1 = calcu.toFixed(2);
                document.querySelector(".result").innerText = `Total: $${calcu1}`;
                input.value = "";
                aa =document.querySelector(".result")
                aa.classList.remove("Edit")
            }
            else if (input.value>=40) {
            calcu1 = calcu.toFixed(2);
            document.querySelector(".result").innerText = `Total: $${calcu1}`
            aa =document.querySelector(".result")
            aa.classList.remove("Edit")
            }
            else if (input.value<0) {
                 aa =document.querySelector(".result")
                aa.classList.add("Edit")
                     aa.innerText = `Error: cost cannot be less than $0`
            }
            else{
                  document.querySelector(".result").innerText = `Total: $0.00`

            }
            document.querySelector("input").value = ""
        }
        let func1 = () => {
            document.querySelector('.typing').innerText = document.querySelector(".type").value
        }
        let calculator = (value) => {
            let ab = ["+", "-","*","/"]
            if (checker1 === 1 && ab.includes(value)) {
                checker1 = 2;
            }
            if (!checker && checker1 !== 1) {
                a += value
                console.log(a)
                checker1 = 2;
            }
            else if (checker && ab.includes(value)) {
                a += value
                checker = false;
                checker1 = 2;
            }
            else {
                a = value;
                checker = false;
                checker1 = 2;
            }
            document.querySelector('.calculator').innerText = a
        }
        let Back=()=>{
            a = a.slice(0,-1)
            if (a==="") {
              document.querySelector('.calculator').innerText="0"
            }
            else{
              document.querySelector('.calculator').innerText=a
            }
            console.log(a)
        }
        let clear1 = () => {
            document.querySelector('.calculator').innerText = "0"
            a = "";
            localStorage.removeItem("saving")
            checker1 = 2;
        }
        
        let calculation = () => {
            try {
                a = String(eval(a)) ;
            } catch (error) {
                a="Error"
            }
            console.log(a)
            document.querySelector('.calculator').innerText = a
            checker = true;
            localStorage.setItem("saving", a);
            console.log(a)
            checker1 = 2;
        }
        // document.querySelector("p").innerText="hello i am changed"