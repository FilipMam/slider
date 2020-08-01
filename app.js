let activeSlideNumber = 3;

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");
let dot5 = document.querySelector("#dot5");

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

let showSlide1 = () => {
    showSlide(1);
};

let showSlide2 = () => {
    showSlide(2);
};

let showSlide3 = () => {
    showSlide(3);
}

let showSlide4 = () => {
    showSlide(4);
}

let showSlide5 = () => {
    showSlide(5);
}

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

// któryElement?.addEventListener("kiedy?", "co ma się dziać?")
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);
dot5.addEventListener("click", showSlide5);

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);

showSlide(activeSlideNumber);