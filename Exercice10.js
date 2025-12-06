function sommeRecursive(n) {
    if (n === 1) {
        return 1;   // Cas de base
    } else {
        return n + sommeRecursive(n - 1);   // Appel récursif
    }
}

function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

console.log(sommeIterative(5));   // 15
console.log(sommeRecursive(5));   // 15
