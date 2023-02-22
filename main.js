'use:script';

const KMtratta = prompt('inserisci i km della tratta');
console.log(KMtratta);
document.querySelector('h1').innerHTML = `La lunghezza della tua tratta è di ${KMtratta} km`;

const etaUser = prompt('inserisci la tua età');
console.log(etaUser);
document.querySelector('h2').innerHTML = `La tua età è di ${etaUser} anni`;

let costoLordo = KMtratta * 0.21;
let costoPreTax =costoLordo.toFixed(2)
console.log(costoLordo);

document.querySelector('div').innerHTML = `il costo della tua tratta è di ${costoPreTax}€`;


if (etaUser < 18) {
    let sconto = costoLordo * 20 / 100;
    let discount =sconto.toFixed(2)
    console.log('applica sconto 20%')
    document.querySelector('h3').innerHTML = `il tuo sconto è di ${discount}€`;
    let costoNetto = costoLordo - sconto;
    let costoFinale = costoNetto.toFixed(2)
    document.querySelector('p').innerHTML = `il costo finale del tuo biglietto è di ${costoFinale}€`;

} else if (etaUser > 65) {
    let sconto = costoLordo * 40 / 100;
    let discount =sconto.toFixed(2)
    console.log('applica sconto 40%')
    document.querySelector('h3').innerHTML = `il tuo sconto è di ${discount}€`;
    let costoNetto = costoLordo - sconto;
    let costoFinale = costoNetto.toFixed(2)
    document.querySelector('p').innerHTML = `il costo finale del tuo biglietto è di ${costoFinale}€`;
}
