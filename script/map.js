
var map = L.map('map').setView([44.6627, 20.9346], 9);

//OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// lokacije
var locations = [
    {
        // Smederevo
        coords: [44.6627, 20.9346],
        name: 'Smederevo',
        address: 'Kolarski Put 330, sprat 3, Smederevo 11300',
        contact: 'Vasić Slađana - +381 64 32 040 11'
    },
    {
        // Slobodna Zona Smederevo
        coords: [44.6647, 20.9189],
        name: 'Slobodna Zona Smederevo',
        address: 'Đure Salaja 17, 11300 Smederevo',
        contact: 'Zdravković Goca - +381 64 22 495 72'
    },
    {
        // Mladenovac
        coords: [44.4041, 20.6811],
        name: 'Mladenovac',
        address: 'Senaja, Senajska 2, 11235 Mali Požarevac',
        contact: 'Đurić Mirjana - +381 64 82 549 82'
    },
    {
        // Smederevska Palanka
        coords: [44.3659, 20.9581],
        name: 'Smederevska Palanka',
        address: 'Jozefa Šulca 22 (Carinski terminal)',
        contact: 'Vuletić Jelica - +381 64 64 854 06'
    }
];

// Markeri
locations.forEach(location => {
    L.marker(location.coords).addTo(map)
        .bindPopup(`
            <b>${location.name}</b><br>
            ${location.address}<br>
            Contact: ${location.contact}
        `);
});



