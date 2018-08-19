let moyenne = Number(prompt("Moyenne de l'eleve !"));

if (moyenne<10){
    console.log("Ce candidat est recalé.");
} else if (moyenne >= 10 && moyenne < 12){
    console.log("Reçu.");
} else {
    console.log("Reçu avec mention.");
}


