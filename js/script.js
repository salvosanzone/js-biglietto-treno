const percorrenzaKm = parseInt(prompt('Quanti km devi percorrere?'));
const età = parseInt(prompt('Quanti anni hai?'));

console.log('km percossi ',percorrenzaKm);
console.log('età passeggero ',età);


const prizeOneKm = 0.21 ;

const prodottoKmEuro = percorrenzaKm * prizeOneKm;
console.log('prezzo per km percosso',prodottoKmEuro);
