let button = document.querySelectorAll(".play-button")
// loops through the buttons and styles them. changing the colors of them.
for(let i = 0; i<button.length;i++){
  button[i].addEventListener("mouseover", function(event){
    button[i].style.backgroundColor = "white"
    button[i].style.color = "Black"
    button[i].textContent = "Play🎵"
  })
  button[i].addEventListener("mouseout", function(event){
    button[i].style.color = "black"
    button[i].style.backgroundColor = "turquoise"
    button[i].textContent = "Play"   
  })

  button[i].addEventListener("click", function(event){
    button[i].textContent = "⏸️"   
  })
  
}


let songs = document.querySelectorAll("img")

// loops through all the song images and than makes them bigger when mouse is over them. 
for(let i=0; i<songs.length; i++){
  songs[i].addEventListener("mouseover", function(event){
    songs[i].style.transform = "scale(1.2)"
  })

  songs[i].addEventListener("mouseout", function(event){
    songs[i].style.transform = "scale(1.0)"
  })
}
