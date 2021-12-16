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
/* let pariDispari = prompt('Scegli pari o dispari');

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
let result;

function numeroMacchina (maxNum, minNum) {
    result = Math.floor(Math.random() * ((maxNum + 1)- minNum)) + minNum;

    return result
};
let machine = numeroMacchina(1, 5);

if (pariDispari == 'pari' && machine == 2 || machine == 4) {
    machine += 1;
}

if (pariDispari == 'dispari' && machine == 3 || machine == 5) {
    machine -= 1;
}

if (pariDispari == 'dispari' && machine == 1) {
    machine += 1;
}
console.log(machine);
console.log(pariDispari);
 */

// Riscrittura Snack 2
let pariDispari = prompt('Scegli pari o dispari');
let numeroScelto;
//eseguo un controllo sulla risposta dell'utente
function numeroPlayer1 (numeroScelto) {

    if (pariDispari !== 'pari' && pariDispari !== 'dispari') {
        alert('Ti avevo detto di inserire pari o dispari!');

    } else {
        numeroScelto = parseInt(prompt('Ora scegli un numero tra 1 e 5'));
        if (numeroScelto > 5 || numeroScelto < 1) {
            alert('Hai rovinato il gioco -_-');
        }
    }

    return numeroScelto;
}
let player1Num = numeroPlayer1(numeroScelto);
console.log(player1Num);

//Creo una funzione che generi un numero random per la macchina

function numeroMacchina (maxNum, minNum) {
    result = Math.floor(Math.random() * ((maxNum + 1)- minNum)) + minNum;

    return result
};
let machineNum = numeroMacchina(1, 5);
console.log(machineNum);

const sum = player1Num + machineNum;
console.log(sum);

function winSituation (sum) {
    if (sum % 2 === 0) {
        console.log ('Ha vinto pari');
    } else {
        console.log('Ha vinto dispari');
    }
    return sum;
}

let win = winSituation (sum);
