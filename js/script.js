//chiedere di inserire una parola:
/* let answer = prompt('Inserisci una parola! Magari palindroma...')
let palindroma = false;

//La funzione verifica che la parola sia palindroma
function verificaPal(answer, palindroma) {
    if (answer === answer.split('').reverse().join('')) {
        palindroma = true;
    }
    console.log(palindroma);
    //implica il ritorno dell'elemento contenuto nella variabile answer, ma letto al contrario
    return answer.split('').reverse().join('');
}

let verifica = verificaPal(answer, palindroma);
console.log(verifica);
 */

//Snack 2
//L'utente sceglie se tirare pari o dispari
let pariDispari = prompt('Scegli pari o dispari');
//eseguo un controllo sulla risposta dell'utente
if (pariDispari !== 'pari' && pariDispari !== 'dispari') {
    alert('Ti avevo detto di inserire pari o dispari!');
} else if (pariDispari === 'pari') {
    let numeroPari = parseInt(prompt('Ora scegli un numero tra 2 e 4'));
    if(numeroPari !== 2 && numeroPari !== 4){
        alert('Ti avevo detto di inserire 2 o 4!');
    }
    console.log(numeroPari)
} else if (pariDispari === 'dispari') {
    let numeroDisp = parseInt(prompt('Ora scegli un numero tra 1, 3 e 5'));
    if(numeroDisp !== 1 && numeroDisp !== 3 && numeroDisp !== 5){
        alert('Ti avevo detto di inserire 1, 3 o 5!');
    }
    console.log(numeroDisp)
}
console.log(pariDispari);
