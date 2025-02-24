window.alert("Benvenuto alla Boolean Trasporti,la preghiamo di fornirci i km da percorrere e la sua età anagrafica");

//denizione variabile costo treno -- parseFloat per i numeri decimali

const price= parseFloat(0.21);                                      

//richiesta chilometri da percorrere

let km= parseInt(prompt("Inserisci quanti km vuoi percorrere"));

// stampa dato inserito

console.log(km);

// richiesta età passeggero

let age= parseInt(prompt("Inserisci la tua età"));

// stampa dato inserito

console.log(age);

// calcolo costo biglietto intero
let priceTicket = price * km;

// percentuale sconto per minorenni e pensionati
let discountYoung = 0.80;
let discountOld = 0.60;

//condizione per calcolo

if (age < 18) {
    priceTicket= priceTicket * discountYoung;
   
} else if(age > 65){
   priceTicket = priceTicket * discountOld;
}

console.log( priceTicket);


