let activeSlideNumber = 3;

let arrowRight = document.querySelector("#arrow-right");
let arrowLeft = document.querySelector("#arrow-left");

let numberOfSides = document.querySelectorAll(".slide").length;

let hideActiveElement = () => {
    let activeElemenet = document.querySelector(".active");
    
    if (activeElemenet) {
        activeElemenet.classList.remove("active");
    }

    let activeDot = document.querySelector(".dot-active");
    
    if (activeDot) {
        activeDot.classList.remove("dot-active");    
    }    
    
};

let showSlide = (slideNumber) => {
    activeSlideNumber = slideNumber;
    hideActiveElement();
    document.querySelector("#slide" + slideNumber).classList.add("active");
    document.querySelector("#dot" + slideNumber).classList.add("dot-active");
};

let showNextSlide = () => {
    if (activeSlideNumber === numberOfSides) {
        showSlide(1);
    } else {
        showSlide(activeSlideNumber + 1);    
    }    
}

let showPreviousSlide = () => {
    if (activeSlideNumber === 1) {
        showSlide(numberOfSides);
    } else {
        showSlide(activeSlideNumber - 1);
    }
};

let onKeyDown = (event) => {
    if (event.keyCode === 39) {
        showNextSlide();
    } 
    
    if (event.keyCode === 37) {
        showPreviousSlide();
    }
    
}

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);

document.addEventListener("keydown", onKeyDown);

showSlide(activeSlideNumber);

for (let i = 0; i < numberOfSides; i = i + 1) {
    document.querySelector("#dot" + (i+1)).addEventListener("click", () => {
        showSlide(i+1);
    });
}

