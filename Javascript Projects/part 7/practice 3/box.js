let random;
let arr=JSON.parse(localStorage.getItem("colors"))||[];
console.log(arr)
let boxes=document.querySelectorAll(".box");
let Changes=()=>{
    boxes.forEach((e,index)=>{
        random=Math.floor(Math.random()*16777215).toString(16);//to get hexadecimal value
        e.style.backgroundColor=`#${random}`;
        e.innerHTML=`#${random}`;
        arr[index]=`#${random}`; 
    })
    localStorage.setItem("colors",JSON.stringify(arr))
    console.log(arr)
}
localStorage.setItem("colors",JSON.stringify(arr))
window.onload = () => {
    boxes.forEach((e, index) => {
        if (arr[index]) {
            e.style.backgroundColor = arr[index];
            e.innerHTML = arr[index];
        }
    });
};
let Reset1=()=>{
    arr=[];
    boxes.forEach(e=>{
e.innerHTML="I am a box"
e.style.backgroundColor="white"
    }
    )
    localStorage.setItem("colors",JSON.stringify(arr))
}
//Math.ceil() gives you next number of decimal number for example 4.2 gives you 5
let jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the bicycle fall over? It was two-tired.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did the grape do when he got stepped on? Nothing, but he let out a little wine!",
    "Why are ghosts bad at lying? Because you can see right through them!",
    "What do you call a fish with no eyes? Fsh.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "How does a penguin build its house? Igloos it together.",
    "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "Why don't we see elephants hiding in trees? Because they're really good at it.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why was the math book sad? It had too many problems.",
    "What do you call a dinosaur with a great vocabulary? A thesaurus.",
    "What do you get if you cross a cat with a dark horse? Kitty Perry.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.",
    "Why was the computer cold? It left its Windows open.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why don’t skeletons fight each other? They don't have the guts.",
    "What do you call an alligator in a vest? An investigator.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why did the picture go to jail? Because it was framed.",
    "Why was the broom late? It swept in.",
    "Why was the stadium so cool? Because it was filled with fans.",
    "Why don’t seagulls fly over the bay? Because then they’d be bagels.",
    "Why did the banana go to the doctor? Because it wasn’t peeling well.",
    "What has ears but cannot hear? A cornfield.",
    "Why did the mushroom go to the party alone? Because he's a fungi.",
    "What do you get when you cross a snowman and a dog? Frostbite.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "Why don’t you see elephants hiding in trees? Because they’re so good at it.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why are teddy bears never hungry? They are always stuffed.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "What do you call a factory that sells passable products? A satisfactory.",
    "Why did the bicycle fall over? It was two-tired.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
    "How do you organize a space party? You planet.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why was the math book sad? It had too many problems.",
    "Why was the broom late? It swept in.",
    "Why don’t skeletons fight each other? They don't have the guts.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? It was two-tired.",
    "What do you call a bear with no teeth? A gummy bear.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a boomerang that won’t come back? A stick.",
    "Why was the stadium so cool? Because it was filled with fans.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What’s brown and sticky? A stick.",
    "Why don’t we see elephants hiding in trees? Because they're really good at it.",
    "Why did the picture go to jail? Because it was framed.",
    "Why was the broom late? It swept in.",
    "Why don't we see elephants hiding in trees? Because they're really good at it.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the computer cold? It left its Windows open.",
    "What do you call fake spaghetti? An impasta.",
    "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.",
    "Why don’t you see elephants hiding in trees? Because they’re so good at it.",
    "Why don’t skeletons fight each other? They don't have the guts.",
    "What do you call an alligator in a vest? An investigator.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the picture go to jail? Because it was framed.",
    "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the mushroom go to the party alone? Because he's a fungi.",
    "Why was the stadium so cool? Because it was filled with fans.",
    "What do you call a fish with no eyes? Fsh.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don’t we see elephants hiding in trees? Because they're really good at it.",
    "Why did the bicycle fall over? It was two-tired.",
    "What do you call cheese that isn't yours? Nacho cheese."
];
function Genrate() {
    let b = Math.floor(Math.random()*jokes.length);
    document.getElementById("jokes").innerText=jokes[b];
    // Math.random() * (max - min+1) + min;
}
let Reset=()=>{
    document.getElementById("jokes").innerText='Press the button to get Random joke'
}