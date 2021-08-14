
document.onkeyup = (e) => {   
    e.preventDefault()
    if(e.key == "q" || e.key === "p") {
        var play = new Audio('./drums/kick1.wav')
        play.play()
        kick.classList.add("boxstyle") 
        setTimeout(() => {
            kick.classList.remove("boxstyle")
        }, 200);
    }

    if(e.key == "w" || e.key === "o") {
        var play = new Audio('./drums/highHat1.wav')
        play.play()
        hat.classList.add("boxstyle")
        setTimeout(() => {
            hat.classList.remove("boxstyle")
        }, 200);
    }

    if(e.key == "e" || e.key === "i") {
        var play = new Audio('./drums/snare1.wav')
        play.play()
        snare.classList.add("boxstyle") 
        setTimeout(() => {
            snare.classList.remove("boxstyle")
        }, 200);
    }
    if(e.key == "r" || e.key === "u") {
        var play = new Audio('./drums/clap1.wav')
        play.play()
        clap.classList.add("boxstyle") 
        setTimeout(() => {
            clap.classList.remove("boxstyle")
        }, 200);
    }
    if(e.key == "a" || e.key === "l") {
        var play = new Audio('./drums/kick2.wav')
        play.play()
        kick1.classList.add("boxstyle") 
        setTimeout(() => {
            kick1.classList.remove("boxstyle")
        }, 200);
    }
    if(e.key == "s" || e.key === "k") {
        var play = new Audio('./drums/openHat.wav')
        play.play()
        hat1.classList.add("boxstyle") 
        setTimeout(() => {
            hat1.classList.remove("boxstyle")
        }, 200);
    }
    if(e.key == "d" || e.key === "j") {
        var play = new Audio('./drums/snare2.wav')
        play.play()
        snare1.classList.add("boxstyle") 
        setTimeout(() => {
            snare1.classList.remove("boxstyle")
        }, 200);
    }
    if(e.key == "f" || e.key === "h") {
        var play = new Audio('./drums/clap2.wav')
        play.play()
        clap1.classList.add("boxstyle")
        setTimeout(() => {
            clap1.classList.remove("boxstyle")
        }, 200);
    }

    
}