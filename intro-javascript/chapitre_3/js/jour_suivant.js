// Ecrivez un programmejour_suivant.js qui fait saisir un nom de jour à 
// l'utilisateur, puis affiche le nom du jour suivant. Les erreurs de saisie 
// (jour incorrect) doivent être gérées.

let day = prompt("Hit a day, we will tell you the next day, and also a day before");

switch (day){
    case "monday":
    console.log("Day before: Sunday. - Next day: Tuesday, Thanx You !");
    alert ("Day before: Sunday. - Next day: Tuesday, Thanx You !");
    break;

    case "tuesday":
    console.log("Day before: Monday. - Next day: Wednesday, Thanx You !");
    alert ("Day before: Monday. - Next day: wenesday, Thanx You !");
    break;

    case "wednesday":
    console.log("Day before: Tuesday. - Next day: Thursday, Thanx You !");
    alert ("Day before: Tuesday. - Next day: Thursday, Thanx You !");
    break;

    case "thursday":
    console.log("Day before: Wednesday. - Next day: Friday, Thanx You !");
    alert ("Day before: Wednesday. - Next day: Friday, Thanx You !");
    break;

    case "friday":
    console.log("Day before: Thursday. - Next day: Saturday, Thanx You !");
    alert ("Day before: Thursday. - Next day: Saturday, Thanx You !");
    break;

    case "saturday":
    console.log("Day before: Friday. - Next day: Sunday, Thanx You !");
    alert ("Day before: friday. - Next day: Sunday, Thanx You !");
    break;

    case "sunday":
    console.log("Day before: Saturday. - Next day: Monday, Thanx You !");
    alert ("Day before: Saturday. - Next day: Monday, Thanx You !");
    break;

    default:
    console.log("Please specify a day of a week, thnx U !");
    alert ("Please specify a day of a week, thnx U !");
}

//-------

let day = prompt("Hit a day, we will tell you the next day, and also a day before");

if (day === "monday"){
    console.log("Day before: Sunday. - Next day: Tuesday, Thanx You !");
    alert ("Day before: Sunday. - Next day: Tuesday, Thanx You !");
} else if (day === "tuesday"){
    console.log("Day before: Monday. - Next day: Wednesday, Thanx You !");
    alert ("Day before: Monday. - Next day: wenesday, Thanx You !");
} else if (day ==="wednesday"){
    console.log("Day before: Tuesday. - Next day: Thursday, Thanx You !");
    alert ("Day before: Tuesday. - Next day: Thursday, Thanx You !");
} else if (day === "thursday"){
    console.log("Day before: Wednesday. - Next day: Friday, Thanx You !");
    alert ("Day before: Wednesday. - Next day: Friday, Thanx You !");
} else if (day === "friday"){
    console.log("Day before: thursday. - Next day: Saturday, Thanx You !");
    alert ("Day before: Thursday. - Next day: Saturday, Thanx You !");
} else if (day === "saturday"){
    console.log("Day before: Friday. - Next day: Sunday, Thanx You !");
    alert ("Day before: friday. - Next day: Sunday, Thanx You !");
} else if (day === "sunday"){
    console.log("Day before: Saturday. - Next day: Monday, Thanx You !");
    alert ("Day before: Saturday. - Next day: Monday, Thanx You !");
} else {
    console.log("Please specify a day of a week, thnx U !");
    alert ("Please specify a day of a week, thnx U !");
}