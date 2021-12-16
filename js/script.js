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
let machine = 0;
let pariDispari = prompt('Scegli pari o dispari');

let numeroScelto;
//eseguo un controllo sulla risposta dell'utente
function numeroPlayer1 (numeroScelto) {

    if (pariDispari !== 'pari' && pariDispari !== 'dispari') {
        alert('Ti avevo detto di inserire pari o dispari!');

    } else if (pariDispari === 'pari') {
        numeroScelto = parseInt(prompt('Ora scegli un numero tra 2 e 4'));
        if(numeroScelto !== 2 && numeroScelto !== 4){
            alert('Ti avevo detto di inserire 2 o 4!');
        };
    } else if (pariDispari === 'dispari') {
        numeroScelto = parseInt(prompt('Ora scegli un numero tra 1, 3 e 5'));
        if(numeroScelto !== 1 && numeroScelto !== 3 && numeroScelto !== 5){
            alert('Ti avevo detto di inserire 1, 3 o 5!');
        };
    }

return numeroScelto;
}

let player1 = numeroPlayer1(numeroScelto);
console.log(player1);

//Creo una funzione che generi un numero random per la macchina
