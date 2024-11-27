document.addEventListener("DOMContentLoaded", () => {
    // Create map centered on the first location
    const map = L.map('googlemap', {
        scrollWheelZoom: false
    }).setView([44.6700, 20.9311], 9);

    // OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // locations
    const locations = [
        { name: "Smederevska Palanka", lat: 44.3658, lng: 20.9581 },
        { name: "Slobodna Zona Smederevo", lat: 44.6553, lng: 20.9000 },
        { name: "Mladenovac", lat: 44.4386, lng: 20.6972 },
        { name: "Smederevo", lat: 44.6700, lng: 20.9311 }
    ];

    // Add markers
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b>`)
            .openPopup();
    });
});