// Ecrivez un programmecomparaison.js qui fait saisir deux nombres puis 
// compare leurs valeurs et affiche un message approprié.

let x = Number(prompt("Saisir une premiere valeur(de preference un nombre) !"));
let y = Number(prompt("Saisir une deuxieme valeur(de preference un nombre) !"));

if (x !== y){
    console.log("ils sont inegaux ");
    alert ("ils sont inegaux ");
} else {
    console.log("Ils sont equivalent");
    alert ("Ils sont equivalent");
}

if (x<y){
    console.log(x + " est inferieur a " + y);
    alert (x + " est inferieur a " + y);
} else if (x>y){
    console.log(x + " est superieur a " + y);
    alert (x + " est superieur a " + y);
} else {
    console.log(x + " est equivalente a " + y);
    alert (x + " est equivalente a " + y);
}

// le cas avec switch case a present
// not working-------------------------
// let x = Number(prompt("Saisir une premiere valeur(de preference un nombre) !"));
// let y = Number(prompt("Saisir une deuxieme valeur(de preference un nombre) !"));

// switch (x,y) {
//     case x>y:
//     console.log(x + " est superieur a " + y+" &| "+ y + " est inferieur a " + x);
//     alert (x + " est superieur a " + y+" &| "+ y + " est inferieur a " + x);
//         break;
//     case x<y:
//     console.log(x + " est inferieur a " + y+" &| "+ y + " est superieur a " + x);
//     alert (x + " est inferieur a " + y+" &| "+ y + " est superieur a " + x);
//         break;
//     default:
//     console.log(x + " est equivalente a " + y+" &| "+ y + " = " + x);
//     alert (x + " est equivalente a " + y+" &| "+ y + " = " + x);
//         break;
// }