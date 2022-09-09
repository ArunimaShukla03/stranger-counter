// Document.getElementById("counter-el").innerText=5 [here we are setting the innertext of the element that has the id "counter-el" to 5]

let countEl = document.getElementById("counter-el")

console.log(countEl)

let count=0

function counter() {
  count=count+1
  countEl.innerText = count
  console.log(count)
}
