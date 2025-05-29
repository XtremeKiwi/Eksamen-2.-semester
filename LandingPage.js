// LeafletJS API //
var map = L.map('map').setView([55.67594, 12.56553], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

                //Juncle automat locations //
                L.marker([55.67594, 12.56553]).addTo(map)
                    .openPopup();
                L.marker([55.68, 12.57553]).addTo(map)
                    .openPopup();
                L.marker([55.67480, 12.54553]).addTo(map)
                    .openPopup();
                L.marker([55.67594, 12.5483]).addTo(map)
                    .openPopup();
                L.marker([55.67194, 12.5583]).addTo(map)
                    .openPopup();
                L.marker([55.67694, 12.5683]).addTo(map)
// LeafletJS API end //

//Array of Objects for potential future use //
const Products = [
    {   name: "æble-juice",
        price: 25,
        size: "33ml",
        inStock: true
    },
    {   name: "appelsin-juice",
        price: 25,
        size: "33ml",
        inStock: true
    },
    {   name: "hyldeblomst-juice",
        price: 25,
        size: "33ml",
        inStock: false
    },
    {   name: "rababer-juice",
        price: 25,
        size: "33ml",
        inStock: true
    }
];
//Array end //

//Logo bopping in the intro//
let logo = document.querySelector(".juncle-logo-main");

const logoRotate = [
    { transform: "rotate(30deg)" },
    { transform: "rotate(-30deg)"},
    { transform: "rotate(30deg)"}
];
const logoTiming = {
    duration: 4000,
    iterations: Infinity
};

logo.animate(logoRotate, logoTiming)
//Logo bopping end//

//Dark mode//
function darkMode(){
    let darkmode = document.body;
    darkmode.classList.toggle("dark-mode")
}
//Dark mode end//
