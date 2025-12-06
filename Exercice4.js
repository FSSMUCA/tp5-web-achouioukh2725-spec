let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));
for (let i = min; i < max+1; i++) { 
    console.log(i)
    if( i % 3===0){
        if (i % 5===0)
        {
            console.log(i,"Est multiple de 3 et 5 ")
            continue;
        }
        console.log(i,"Est Un multiple de ",3);

    }
    if( i % 5===0){
        if (i % 3===0)
        {
            console.log(i,"Est multiple de 3 et 5 ")
            continue;
        }
        console.log(i,"Est Un multiple de ",3);

    }
}