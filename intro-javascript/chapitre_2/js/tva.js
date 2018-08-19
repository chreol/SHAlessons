console.log(100 + ((19.6/100) * 100)); //119.6
console.log("Le prix TTC est de " +(100 + (19.6/100 *100)) + " euros");

let ht = 100;
let tva = (19.6% + ht);
let ttc = ht + tva;
console.log("Le prix TTC est de " + ttc +" euros."); 
//Le prix TTC est de 119.6 euros.

function Ttc(x,y){
    
    return Ttc = x + (x* (y/100));
};

let ht = Number(prompt("Enter Price here !"));
let tva1 = Number(prompt("Enter Tva"));
let tva = tva1 / 100 * ht;
let TTC = ht + tva;
// alert TTC
console.log("La TTC du produit est de " + TTC + " Euros.");

