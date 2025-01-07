// Liste complète des éléments chimiques du tableau périodique
const elements = [
    { numero: 1, symbole: "H", nom: "Hydrogène", description: "L'hydrogène est un gaz incolore et inflammable. Il est utilisé dans la production d'ammoniac, d'hydrogène métallique et dans les piles à hydrogène.", categorie: "Élément chimique" },
    { numero: 2, symbole: "He", nom: "Hélium", description: "L'hélium est un gaz noble, incolore et inodore, utilisé dans les ballons et comme réfrigérant dans certaines technologies.", categorie: "Élément chimique" },
    { numero: 3, symbole: "Li", nom: "Lithium", description: "Le lithium est un métal alcalin utilisé dans la fabrication de batteries rechargeables et dans les traitements psychiatriques.", categorie: "Élément chimique" },
    { numero: 4, symbole: "Be", nom: "Béryllium", description: "Le béryllium est un métal léger utilisé dans les alliages et les rayons X.", categorie: "Élément chimique" },
    { numero: 5, symbole: "B", nom: "Bore", description: "Le bore est utilisé dans la fabrication de verres résistants à la chaleur et dans les matériaux pour l'industrie nucléaire.", categorie: "Élément chimique" },
    { numero: 6, symbole: "C", nom: "Carbone", description: "Le carbone est un élément de base de la vie. Il est essentiel dans les composés organiques et sous forme de diamant, graphite et graphène.", categorie: "Élément chimique" },
    { numero: 7, symbole: "N", nom: "Azote", description: "L'azote est un gaz inerte qui compose 78% de l'atmosphère terrestre. Il est utilisé dans la fabrication d'ammoniac et d'engrais.", categorie: "Élément chimique" },
    { numero: 8, symbole: "O", nom: "Oxygène", description: "L'oxygène est vital pour la respiration. Il est aussi utilisé dans l'industrie pour la coupe des métaux et dans la fabrication de produits chimiques.", categorie: "Élément chimique" },
    { numero: 9, symbole: "F", nom: "Fluor", description: "Le fluor est un gaz toxique utilisé dans les produits chimiques industriels, comme les fluorocarbures et dans le traitement des eaux.", categorie: "Élément chimique" },
    { numero: 10, symbole: "Ne", nom: "Néon", description: "Le néon est un gaz noble utilisé principalement dans les enseignes lumineuses et dans certains tubes à haute tension.", categorie: "Élément chimique" },

    { numero: 11, symbole: "Na", nom: "Sodium", description: "Le sodium est un métal alcalin utilisé dans la fabrication de savons et dans des applications industrielles comme la métallurgie.", categorie: "Élément chimique" },
    { numero: 12, symbole: "Mg", nom: "Magnésium", description: "Le magnésium est un métal léger utilisé dans les alliages d'aluminium et dans la fabrication de produits chimiques.", categorie: "Élément chimique" },
    { numero: 13, symbole: "Al", nom: "Aluminium", description: "L'aluminium est un métal léger, utilisé dans la fabrication d'aéronefs, de composants électroniques et de divers produits industriels.", categorie: "Élément chimique" },
    { numero: 14, symbole: "Si", nom: "Silicium", description: "Le silicium est un semi-conducteur utilisé dans l'électronique et la fabrication de panneaux solaires.", categorie: "Élément chimique" },
    { numero: 15, symbole: "P", nom: "Phosphore", description: "Le phosphore est un élément essentiel pour la production d'engrais et utilisé dans les allumettes et la fabrication de produits chimiques.", categorie: "Élément chimique" },
    { numero: 16, symbole: "S", nom: "Soufre", description: "Le soufre est utilisé dans la production d'acide sulfurique, ainsi que dans les produits chimiques industriels et les engrais.", categorie: "Élément chimique" },
    { numero: 17, symbole: "Cl", nom: "Chlore", description: "Le chlore est un gaz toxique utilisé dans la purification de l'eau, la production de plastique PVC, et dans de nombreux produits chimiques.", categorie: "Élément chimique" },
    { numero: 18, symbole: "Ar", nom: "Argon", description: "L'argon est un gaz noble utilisé dans des applications industrielles telles que le soudage et la fabrication d'ampoules électriques.", categorie: "Élément chimique" },

    { numero: 19, symbole: "K", nom: "Potassium", description: "Le potassium est un métal alcalin utilisé dans les engrais et dans la fabrication de produits chimiques.", categorie: "Élément chimique" },
    { numero: 20, symbole: "Ca", nom: "Calcium", description: "Le calcium est un métal alcalino-terreux important pour la construction des os et des dents, et utilisé dans l'industrie des matériaux.", categorie: "Élément chimique" },
    { numero: 21, symbole: "Sc", nom: "Scandium", description: "Le scandium est utilisé dans les alliages d'aluminium et dans certaines applications aérospatiales.", categorie: "Élément chimique" },
    { numero: 22, symbole: "Ti", nom: "Titane", description: "Le titane est un métal léger, solide et résistant à la corrosion, utilisé dans les applications aérospatiales et dans les implants médicaux.", categorie: "Élément chimique" },
    { numero: 23, symbole: "V", nom: "Vanadium", description: "Le vanadium est utilisé dans la fabrication d'alliages d'acier de haute résistance et dans les batteries au vanadium.", categorie: "Élément chimique" },
    { numero: 24, symbole: "Cr", nom: "Chromium", description: "Le chrome est utilisé dans les alliages d'acier inoxydable et dans la fabrication de pigments.", categorie: "Élément chimique" },
    { numero: 25, symbole: "Mn", nom: "Manganèse", description: "Le manganèse est utilisé dans la production d'acier et dans de nombreuses applications chimiques.", categorie: "Élément chimique" },
    { numero: 26, symbole: "Fe", nom: "Fer", description: "Le fer est un métal utilisé dans la fabrication d'alliages et dans la construction d'infrastructures.", categorie: "Élément chimique" },

    // (Ajout d'autres éléments chimiques ici...)

    { numero: 118, symbole: "Og", nom: "Oganesson", description: "L'oganesson est un élément synthétique très instable, découvert en 2002. Il est l'un des éléments les plus lourds connus.", categorie: "Élément chimique" },
];

// Récupération du conteneur du tableau
const tableau = document.getElementById("tableau");

// Création des cases du tableau périodique
elements.forEach(element => {
    const div = document.createElement("div");
    div.classList.add("element");

    div.innerHTML = `
        <div class="numero">${element.numero}</div>
        <div class="symbole">${element.symbole}</div>
        <div class="nom">${element.nom}</div>
    `;

    div.addEventListener("click", () => {
        showModal(element);
    });

    tableau.appendChild(div);
});

// Gestion de la modale
const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-content">
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <button class="close-btn" onclick="closeModal()">Fermer</button>
    </div>
`;

document.body.appendChild(modal);

function showModal(element) {
    document.getElementById("modal-title").innerText = element.nom;
    document.getElementById("modal-description").innerText = element.description;
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

// Style du bouton
const styleButton = document.createElement('style');
styleButton.innerHTML = `
    .simulations-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .simulations-btn:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(styleButton);
