function totalAvecRemise(total, remise) {
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}

// Demander les valeurs à l'utilisateur
let totalHT = Number(prompt("Entrez le total HT :"));
let remise = Number(prompt("Entrez la remise en % :"));

// Calculer et afficher le total final
let resultat = totalAvecRemise(totalHT, remise);
console.log("Le total final après remise est : " + resultat);
