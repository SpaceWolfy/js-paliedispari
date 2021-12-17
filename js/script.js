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
};
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


//snack 1 soluzione Ottavio:
//metto sempre prima le funzioni in una pagina:
//l'is indica di prassi che ritorna true o false
function isPalindroma(word) {

    let reverse = '';
    /* 
    Voglio creare dalla parola dritta il suo reverso:  
    il -1 serve a partire sempre dalll'ultima lettera.
    Guardare il console log per capire meglio
    */
    for(let i = word.lenght - 1;  i >= 0; i--) {
        reverse += word[i];
        console.log (reverse);
    };

    /* if(reverse === word){
        return true;
    } else {
        return false;
    }; */

    //L'if sopra si può scrivere anche così

    /* if(reverse === word){
        return true;
    };

    return false; */

    //L'if sopra si può scrivere anche così

    return reverse === word;
};

const parolaUtente = prompt('inserisci una parola');
//se la parola inserita dall'utente ispalindroma 
//allora stiamo nella situazione true e gli dò l'argomento
//if isPalindroma(parolaUtente) === true
if (isPalindroma(parolaUtente)) { //if return -> (true) {}
    console.log('è palindroma');
} else { //if return -> (false) {}
    console.log('non è palindroma');
};


//snack 2 soluzione Ottavio:
function randomNumb(max, min) {
    result = Math.floor(Math.random() * ((max + 1)- min)) + min;
    return result;
};

function isPari(num) {

    return num % 2 === 0;
};

//semplifico ulteriormente l'if sotto mettendolo in una funzione: 
function userWin(totalNumber, userSelection) {
    //chiamo una funzione dentro un'altra funzione
    return (isPari(totalNumber) && userSelection === 'pari' || !isPari(totalNumber) && userSelection === 'dispari');
}

const userChoice = prompt('Scegli, pari o dispari');
const userNumber = prompt('Inserisci un numero da 1 a 5');
const machineNumber = randomNumb(1, 5);

const total = userNumber + machineNumber;

/* 
if (isPari(total) && userChoice === 'pari') {
    console.log('Hai vinto!');
} else if (isPari(total) && userChoice !== 'pari') {
    console.log('Hai perso!');
} else if (!isPari(total) && userChoice === 'dispari') {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso');
};
 */

//semplifichiamo l'if:
/* 
if (isPari(total) && userChoice === 'pari' || !isPari(total) && userChoice === 'dispari') {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
} 
*/

//semplifico ancora l'if: 
if (userWin(total, userChoice)) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
};