/* =========================
   COMPTEUR
========================= */

let compteur = 0;

function incrementer() {

    compteur++;

    document.getElementById("counter").innerText = compteur;
}

/* =========================
   CALCULATRICE
========================= */

function ajouter(valeur) {

    document.getElementById("resultat").value += valeur;
}

function calculer() {

    let expression = document.getElementById("resultat").value;

    let resultat = eval(expression);

    document.getElementById("resultat").value = resultat;
}

function effacer() {

    document.getElementById("resultat").value = "";
}
live server