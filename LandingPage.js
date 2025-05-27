

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
