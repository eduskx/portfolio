$(".drum").on("click", function() {
    window.open("./Drum Kit/index.html", "_blank").focus();
})

$(".simon").on("click", function() {
    window.open("./Simon Says/index.html", "_blank").focus();
})

$(".pw").on("click", function() {
    window.open("./Password Generator/index.html", "_blank").focus();
})




$(window).on("load",function() {
    $(".main-animation").addClass("show");
    $(".img-animation").addClass("show");
});


const projectElements = document.querySelectorAll(".projects-animation");
const informationElements = document.querySelectorAll(".information-animation");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
/*         else {
            entry.target.classList.remove("show");
        } */
    });
});

projectElements.forEach((el) => observer.observe(el));
informationElements.forEach((el) => observer.observe(el));

