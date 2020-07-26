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

let hideActiveElement = () => {
    let activeElemenet = document.querySelector(".active");
    activeElemenet.classList.remove("active");
};

let showSlide = (slideNumber) => {
    hideActiveElement();
    document.querySelector("#slide" + slideNumber).classList.add("active");
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

// któryElement?.addEventListener("kiedy?", "co ma się dziać?")
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);
