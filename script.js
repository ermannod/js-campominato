// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

//*************************************************
//*************************************************
//*************************************************
//*************************************************
//*************************************************

// Difficulty
var mode = parseInt(prompt('Select mode: Easy = 0 - Normal = 1 - Hard = 2'));
switch (mode) {
  case 0:
    var max = 100;
    alert('You selected Easy. Good Luck');
    break;
  case 1:
    var max = 80;
    alert('You selected Normal. Good Luck');
    break;
  case 2:
    var max = 50;
    alert('You selected Normal. Good Luck');
    break;
  default:
    alert('You failed to select a mode, we picked Easy for you, good luck');
    var max = 100;
}

// genarate 16 random numbers

var minesList = [];

for (var i = 0; minesList.length < 16 ; i++) {
  var mines = parseInt(randomNum(1,max));
  if (!minesList.includes(mines)) {
    minesList.push(mines);
  }
}
console.log('Mine list: ' + minesList);

var plays = [];
for (var j = 0; plays.length < (max - 16); j++) {
  var playerNum = parseInt(prompt('Enter a number between 1 and ' + max));
  if (minesList.includes(playerNum) || plays.includes(playerNum)){
    alert('GAME OVER! You hit a mine! You made ' + plays.length + ' correct moves. Press OK to restart.');
    // if mine is entered
    window.location.reload()
    break;
  } else if (!playerNum){
    alert('Please enter a number'); // if a nomber is not entered
  } else if (playerNum > max || playerNum < 1){
    alert('Please enter a mumber between 1 and ' + max);
  } else {
    plays.push(playerNum); // adds nomber to players plays
  }
}
console.log('You number list: ' + plays);
console.log('You made ' + plays.length + ' correct moves');


// generate random numbers
function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}
