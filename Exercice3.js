let N= Number(prompt("Entrer Un nombre"));
if (N<0) {
  alert("Nombre Negative");
} else if(N>0 && N<10){
  alert("Petit");
}else if( N>11 && N<50){
    alert("Moyenne");
}else if (N > 100){
    alert("Tres Grand");
}

