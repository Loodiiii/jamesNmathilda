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

// getting year for footer

const currentYear = new Date().getFullYear()
const yearHTML = document.querySelector("#currentYear")

yearHTML.innerHTML = currentYear + " "
