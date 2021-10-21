

const percorrenzaKm = parseInt(prompt('Quanti km devi percorrere?'));
const eta = parseInt(prompt('Quanti anni hai?'));

console.log('km percossi ',percorrenzaKm);
console.log('età passeggero ',eta);

const prizeOneKm = 0.21;

let prodottoKmEuro = percorrenzaKm * prizeOneKm;
console.log('prezzo per km percosso',prodottoKmEuro);

const minorenne = 17;
if (eta <= minorenne) {
  console.log("Ok, utente minorenne");
  prodottoKmEuro = prodottoKmEuro - prodottoKmEuro * 0.20
}

const over = 65;
if (eta > over) {
  console.log("Ok, utente over 65");
  prodottoKmEuro = prodottoKmEuro - prodottoKmEuro * 0.40
}

console.log('prezzo finale',prodottoKmEuro);

 
const textToPrint =
`
Quanti km devi percorrere? ${percorrenzaKm};<br>
Quanti anni hai? ${eta};<br>
Prezzo finale: ${prodottoKmEuro}
`;
console.log(textToPrint);
document.getElementById('output').innerHTML = textToPrint;


  // return finalPrice.toFixed(2);
