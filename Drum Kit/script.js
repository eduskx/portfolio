var numberOfItems = document.querySelectorAll(".drum").length;

// for clicks
for (let i = 0; i<numberOfItems; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        showAnimation(this.innerHTML);

    })
}

// for keystrokes
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    showAnimation(event.key);
})



function playSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            audio.volume = 0.2;
            break;
    
        case "s":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            audio.volume = 0.2;
            break;

        case "d":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            audio.volume = 0.2;
            break;

        case "f":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            audio.volume = 0.2;
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            audio.volume = 0.2;
            break;

        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            audio.volume = 0.2;
            break;    

        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            audio.volume = 0.2;
            break;

        default:
            break;
    }
}

function showAnimation(key) {
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },
    100);
}