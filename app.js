// Gdy klikamy na 2 kropke pojawia się 2 drugi obrazek

// 1. Znajdźmy kropkę nr. 2 - done
// 2. Niech kropka 'słucha' na kliknięcie - done
// 3. Po kliknięciu, niech pojawi się obrazek nr.2 - done
    // 3.1 Znaleźć obrazek 2 - done
    // 3.2 Dodać do obrazka 2 klasę "active" - done
    // 3.3 Usunąć klasę active z obrazka 1 - done
        // 3.3.1 - Znaleźć obrazek 1 - done
        // 3.3.2 - Usunąć klasę active z obrazka 1 - done

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");
let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");

let showSlide1 = () => {
    let activeElemenet = document.querySelector(".active");
    activeElemenet.classList.remove("active");
    slide1.classList.add("active");
};

let showSlide2 = () => {
    let activeElemenet = document.querySelector(".active");
    activeElemenet.classList.remove("active");
    slide2.classList.add("active");
};

let showSlide3 = () => {
    let activeElemenet = document.querySelector(".active");
    activeElemenet.classList.remove("active");
    slide3.classList.add("active");
}

let showSlide4 = () => {
    let activeElemenet = document.querySelector(".active");
    activeElemenet.classList.remove("active");
    slide4.classList.add("active");
}

// któryElement?.addEventListener("kiedy?", "co ma się dziać?")
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);