var clap = document.getElementById("clap")
var clap1 = document.getElementById("clap1")
var snare = document.getElementById("snare")
var snare1 = document.getElementById("snare1")
var kick = document.getElementById("kick")
var kick1 = document.getElementById("kick1")
var hat = document.getElementById("hat")
var hat1 = document.getElementById("hat1")

   


clap.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/clap1.wav')
    play.play()
})
clap1.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/clap2.wav')
    play.play()
})
kick.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/kick1.wav')
    play.play()
})
kick1.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/kick2.wav')
    play.play()
})
snare.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/snare1.wav')
    play.play()
})
snare1.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/snare2.wav')
    play.play()
})
hat.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/highHat1.wav')
    play.play()
})

hat1.addEventListener('click', (e) => {
    e.preventDefault()
    var play = new Audio('./drums/openHat.wav')
    play.play()
   
})
