'use:script';






function display() {

    //Assigning the variable to the user input
    const userName = document.getElementById("userName").value;
    const KMtratta = document.getElementById("KMtratta").value;

    // to print the input here
    document.getElementById("nome").innerHTML = userName;
    document.getElementById("costo").innerHTML = KMtratta;
};



/* function display() {

    //Assigning the variable to the user input
    // to print the input here

}
 */






/* 
console.log(KMtratta);
console.log(etaUser);

let costoLordo = KMtratta * 0.21;
let costoPreTax = costoLordo.toFixed(2)
console.log(costoLordo);


if (etaUser < 18) {
    let sconto = costoLordo * 20 / 100;
    let discount = sconto.toFixed(2)
    console.log('applica sconto 20%')
    let costoNetto = costoLordo - sconto;
    let costoFinale = costoNetto.toFixed(2)

} else if (etaUser > 65) {
    let sconto = costoLordo * 40 / 100;
    let discount = sconto.toFixed(2)
    console.log('applica sconto 40%')
    let costoNetto = costoLordo - sconto;
    let costoFinale = costoNetto.toFixed(2) */

/* const KMtratta = prompt('inserisci i km della tratta');
 */
/* document.querySelector('h1').innerHTML = `La lunghezza della tua tratta è di ${KMtratta} km`;
 */
/* const etaUser = prompt('inserisci la tua età');
 */
/* document.querySelector('h2').innerHTML = `La tua età è di ${etaUser} anni`;
 */
/* document.querySelector('div').innerHTML = `il costo della tua tratta è di ${costoPreTax}€`;
 */


/*     document.querySelector('p').innerHTML = `il costo finale del tuo biglietto è di ${costoFinale}€`;
 */
