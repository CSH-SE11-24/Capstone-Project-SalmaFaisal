let ptag = document.querySelectorAll("p")
console.log(ptag.length)
// changes the color of the text on hover and makes the cursor pointer on hover
for(let i = 0; i<ptag.length;i++){
  ptag[i].addEventListener("mouseover", function(event){
    ptag[i].style.color = "green"
    ptag[i].style.cursor = "pointer"
  })

  ptag[i].addEventListener("mouseout", function(event){
    ptag[i].style.color = "white"
  })
}

let button = document.querySelectorAll(".listen-button")
// loops through the buttons and styles them accordingly. changing the colors of them.
for(let i = 0; i<button.length;i++){
  button[i].addEventListener("mouseover", function(event){
    button[i].style.backgroundColor = "black"
    button[i].style.color = "white"
    button[i].textContent = "Listen"
  })
// changes the text of the buttons
  button[i].addEventListener("mouseout", function(event){
    button[i].style.color = "white"
    button[i].style.backgroundColor = "green"
    button[0].textContent = "Listen to Album"   


  })
}