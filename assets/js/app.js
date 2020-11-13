// header offset bgdColor with show/hide class

const header = document.querySelector("header")
const ourServices = document.querySelector("#our-services")

let prevScrollPos = window.pageYOffset;
function headerScroll() {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos){
        header.classList.add("header-appear")
    } else {
        header.classList.remove("header-appear")
    }
    prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", () => {
    if(window.pageYOffset > ourServices.offsetTop){
        headerScroll();
    }
    const subhero = document.querySelector(".s1-bottom")

    if(window.pageYOffset > subhero.offsetTop){
        header.style.backgroundColor = "rgb(47, 58, 62)"
    }else{
        header.style.backgroundColor = "transparent"
    }
})

window.addEventListener("click", function() {
    header.classList.add("header-appear")
})

// creating burger for header

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const menuBtnBurger = document.querySelector('.menu-btn__burger');

// slider hero

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        padding: {
            left : 0,
            right: 0,
        },
        perPage: 1,
        arrows: false,
    } ).mount();
} );


// applying some interactions on buttons hover

const buttons = document.querySelectorAll(".hovering-buttons")
const arrows = document.querySelectorAll(".hovering-arrow")
const anchors = document.querySelectorAll(".hovering-anchor")

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("mouseover", () => {
        buttons[i].style.backgroundColor = "rgb(255, 228, 114)"
        anchors[i].style.color = "rgb(47, 58, 62)"
        arrows[i].style.border = "solid rgb(47, 58, 62)"
        arrows[i].style.borderWidth = "0 3px 3px 0"
    })

    buttons[i].addEventListener("mouseleave", () => {
        buttons[i].style.backgroundColor = "transparent"
        anchors[i].style.color = "var(--yellow)"
        arrows[i].style.border = "solid var(--yellow)"
        arrows[i].style.borderWidth = "0 3px 3px 0"
    })
}

const messageButton = document.querySelector("form button")
const emailArrow = document.querySelector("form button img")
messageButton.addEventListener("click", () => {

})




// ordering

const items = document.querySelectorAll(".order-item")
for(let i = 0; i <= items.length; i++){
    items[i].addEventListener("click", function(){
        if(items[i].classList.contains("green")){
            items[i].classList.remove("green")
        }else{
            items[i].classList.add("green")
        }
        
    const orderedItems = document.querySelectorAll(".green")
    let orderedGreenItems = document.querySelector("#ordered-items")
    orderedGreenItems.innerHTML = "(" + orderedItems.length + ")";
    })
}


