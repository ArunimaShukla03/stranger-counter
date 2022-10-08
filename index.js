// Document.getElementById("counter-el").innerText=5 [here we are setting the innertext of the element that has the id "counter-el" to count]

let countEl = document.getElementById("counter-el")

console.log(countEl)

let count=0

function counter() {
  count=count+1
  countEl.innerText = count
  console.log(count)
}

function save(){
  console.log(count)
}

//strings

/* 

let name = "Arunima"
let greeting = "Hi, my name is "

let myGreeting = greeting + name

console.log(myGreeting)

*/

//numbers are considered strings if they are concatenated with strings

/*

let name1 = 42
let bonusPoints = "1"

let totalPoints = name1 + bonusPoints

console.log(totalPoints)

*/

let welcomeEl = document.getElementById("welcome-el")

let yourName = "Arunima Shukla"

let greeting = "Welcome Back"

welcomeEl.innerText = greeting + ", " + yourName

welcomeEl.innerText += "👋"
