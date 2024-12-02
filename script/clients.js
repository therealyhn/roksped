// clients
const clientsDiv = document.getElementById("clients");
clientsDiv.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center";

// clients websites
const clientWebsites = [
    "http://www.tomitrade.co.rs/",
    "https://schwingstetter.rs/",
    "https://mayekawa.rs/",
    "https://www.mashtronics.com/",
    "https://eurocem.rs/",
    "https://ks-safety.biz/",
    "https://www.ekofurnir.com/",
    "https://profiweld.rs/",
    "", // Minimet
    "", // Stolarium
    "https://www.agc-glass.eu/",
    "https://www.decoinvest.com/",
    "https://dahop-utva.com/",
    "https://birotehna.rs/",
    "https://www.metal-flex.com/",
    "https://www.goek-color.de/",
    "", // Milanic D.O.O
    "", // RIO D.O.O
    "https://novasumadija.rs/",
    "", // Akiba
    "https://www.preymesser.de/en/locations/serbia/",
    "https://srafkocom.rs/",
    "https://champicomp.rs/",
    "https://www.masterline.rs/",
    "", // Ekovald
    "", // International Granites
    "https://timotijevic.net/",
    "https://www.procema.ro/",
    "", // Steel Max
    "https://deltaagrar.rs/",
    "https://tehnograd.rs/",
    "http://www.mstecnologie.com/en/",
    "https://elektrovodomont.rs/",
    "https://mlweldengineering.rs/",
    "https://utva.rs/en/home-page/",
    "", // Gama Expo 2014
    "", // M i? i M?
];

// generate all clients
for (let i = 1; i <= 37; i++) {

    const link = document.createElement("a");
    // Assign the corresponding client website
    link.href = clientWebsites[i - 1];
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = `../images/clients/client${i}.png`;
    img.alt = `Client ${i}`;
    img.className = "w-32 h-32 md:w-48 md:h-48 object-contain hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer mix-blend-multiply";

    // Append the image to the link
    link.appendChild(img);

    // Append the link to the clients div
    clientsDiv.appendChild(link);
}
