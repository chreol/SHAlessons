let chiffre = Number(prompt("Enter a random number !"));
if (chiffre >0){
    console.log("Ce chiffre " + chiffre + " est un entier.");
};

let nombre = Number(prompt("Hit a number !"));
if (nombre > 0){
    alert ("This number: " + nombre + " is a positif number");
};

let chiffre = Number(prompt("Enter a random number !"));
if (chiffre >0){
    console.log(true);
};

let nombre = Number(prompt("Hit a number !"));
if (nombre > 0){
    alert true;
};
///---------------------------//
let number = Number(prompt("enter a munber here !"));
if (number >= 0){
    console.log("The value of your number "+ number + " is Positive or null.");
};

// ---------------------------
let number = Number(prompt("enter a munber here !"));
if (number >= 0){
    console.log("The value of your number "+ number + " is Positive or null.");
}
else { console.log("The value of your number "+ number + " is negative.");
};

////////////////////////////////////
let number = Number(prompt("enter a munber here !"));
if (number > 0){
    console.log("The value of your number "+ number + " is Positive or null.");
} else if(number ===0) {
    console.log("The value of your number "+ number + " null.");
}
else { 
    console.log("The value of your number "+ number + " is negative.");
};
// ************************
let  value = Number(prompt("Enter a value here !"));
if (value >= 0 && value <= 100){
  console.log(true);
}else{
  console.log(false);
};

let  value = Number(prompt("Enter a value here !"));
if (value <=0 || value >= 100){
  console.log(true);
}else{
  console.log(false);
};
 ===
let  value = Number(prompt("Enter a value here !"));
if (!((value >=0 && value <= 100))){
  console.log(true);
}else{
  console.log(false);
};

let temps = prompt("Quel temps fait-il dehors? Nous vous proposerons quelques astuces !");
if (temps === "soleil"){
  console.log("Habillez-vous leger, vous pouvez aller profiter de la mer.");
  alert ("Habillez-vous leger, vous pouvez aller profiter de la mer.");
} else if (temps === "vent"){
  console.log("couvrez vous, de peur d'attrapez une vilaine grippe.");
  alert ("Couvrez vous, de peur d'attrapez une vilaine grippe.");
} else if (temps === "neige"){
  console.log("Restez au chaud, prennez du the, et bon repos.");
  alert ("Restez au chaud, prennez du the, et bon repos.");
} else if (temps === "pluie"){
  console.log("Il serait preferable de sortir couvert, avec en extra un parapluie, des bottes, ...");
  alert ("Il serait preferable de sortir couvert, avec en extra un parapluie, des bottes, ...");
} else {
  console.log("Ressayez SVP, j'ai 4 solutions dans ma memoire qui sont soleil - vent - pluie - neige, ressayez avec une des solutions, merci.");
  alert ("Ressayez SVP, j'ai 4 solutions dans ma memoire qui sont soleil - vent - pluie - neige, ressayez avec une des solutions, merci.");
}

let temps = prompt("Quel temps fait-il dehors? Nous vous proposerons quelques astuces !");
    switch (temps){
      case "soleil":
  console.log("Habillez-vous leger, vous pouvez aller profiter de la mer.");
  alert ("Habillez-vous leger, vous pouvez aller profiter de la mer.");
    break;
    
      case "vent":
  console.log("couvrez vous, de peur d'attrapez une vilaine grippe.");
  alert ("Couvrez vous, de peur d'attrapez une vilaine grippe.");
    break;

      case "neige":
  console.log("Restez au chaud, prennez du the, et bon repos.");
  alert ("Restez au chaud, prennez du the, et bon repos.");
    break;
    
      case "pluie":
  console.log("Il serait preferable de sortir couvert, avec en extra un parapluie, des bottes, ...");
  alert ("Il serait preferable de sortir couvert, avec en extra un parapluie, des bottes, ...");
    break;
    
  default:
  console.log("Ressayez SVP, j'ai 4 solutions dans ma memoire qui sont soleil - vent - pluie - neige, ressayez avec une des solutions, merci.");
  alert ("Ressayez SVP, j'ai 4 solutions dans ma memoire qui sont soleil - vent - pluie - neige, ressayez avec une des solutions, merci.");
}

let x = ("abc,dec");

switch (x){
  case ("abc,dec"):
    console.log("x vaut abc,dec");
    alert ("x vaut abc,dec");
    break;
  default:
    console.log("x est mm embrouille");
    alert ("x est mm embrouille");
}