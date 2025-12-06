function verifierMotDePasse(mdp) {
    // Vérifier longueur >= 8
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else {
        return false;
    }
}

// Demander un mot de passe à l'utilisateur
let motDePasse = prompt("Entrez votre mot de passe :");

// Vérifier et afficher le résultat
if (verifierMotDePasse(motDePasse)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}
