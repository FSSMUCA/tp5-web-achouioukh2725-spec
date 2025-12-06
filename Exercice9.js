function factorielle(n) {
    if (n === 0) {
        return 1;           // Cas de base
    } else {
        return n * factorielle(n - 1);   // Appel récursif
    }
}

// Exemple d'utilisation
console.log(factorielle(5));  // Affiche 120
