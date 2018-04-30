var character;
var health;
var enemyHealth = 100;
var balance;

function start(person){
  character = person;
  console.log(character);
  var hidden = document.getElementById('characterSelect');
  if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
  var show = document.getElementById('home');
  if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }
}

function explore(){
  var show = document.getElementById('home');
  if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
  }

  var exploreShow = document.getElementById('explorePage');
  if (exploreShow.style.display === "none") {
        exploreShow.style.display = "block";
    } else {
        exploreShow.style.display = "none";
  }
  healthRestore();
  enemyHealthRestore('minion');
}

function explore2(){
  var show = document.getElementById('home');
  if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
  }
}

function attack(){
  console.log('character: ' + character);
  if(character == 'knight'){
    battle(character);
    console.log("explore",character);
  } else if(character == 'archer'){
    battle(character);
    console.log("explore", character);
  } else if(character == 'sorcerer'){
    battle(character);
    console.log("explore", character);
  }
}
 function enemyHealthRestore(enemy){
   if (enemy = 'minion'){
     enemyHealth = 100;
   } else if (enemy = 'warrior'){
     enemyHealth = 200;
   }
 }

function healthRestore(){
  if(character == 'knight'){
    health = 200;
  } else if(character == 'archer'){
    health = 150;
  } else if(character == 'sorcerer'){
    health = 100;
  }
}

function battle(character){
  if(character == 'knight'){
    enemyHealth = enemyHealth-25;
    health = health-20;
    checkWin(character);
    console.log(enemyHealth, health, character);
  } else if(character == 'archer'){
    enemyHealth = enemyHealth-50;
    health = health-20;
    checkWin(character);
    console.log(enemyHealth, health, character);
  } else if(character == 'sorcerer'){
    enemyHealth = enemyHealth-75;
    health = health-20;
    checkWin(character);
    console.log(enemyHealth, health, character);
  }
}

function checkWin(character){
  if (health == 0){
    alert("You have been defeated!");
    enemyHealthRestore('minion');
  } else if (enemyHealth == 0){
    alert("Congratulations! The enemy Amarian has been defeated!");
    healthRestore();
    enemyHealthRestore('warrior');
    var victoryShow = document.getElementById('victory1');
    if (victoryShow.style.display === "none") {
          victoryShow.style.display = "block";
      } else {
          victoryShow.style.display = "none";
    }
    var exploreShow = document.getElementById('explorePage');
    if (exploreShow.style.display === "none") {
          exploreShow.style.display = "block";
      } else {
          exploreShow.style.display = "none";
    }
  }
}

function shop(){
  if(character == 'knight'){
    var shopKnight = document.getElementById('knightShop');
    if (shopKnight.style.display === "none") {
          shopKnight.style.display = "block";
      } else {
          shopKnight.style.display = "none";
    }
    var show = document.getElementById('home');
    if (show.style.display === "none") {
          show.style.display = "block";
      } else {
          show.style.display = "none";
      }
  } else if(character == 'archer'){
    var shopArcher = document.getElementById('archerShop');
    if (shopArcher.style.display === "none") {
          shopArcher.style.display = "block";
      } else {
          shopArcher.style.display = "none";
    }
    var show = document.getElementById('home');
    if (show.style.display === "none") {
          show.style.display = "block";
      } else {
          show.style.display = "none";
      }
  } else if(character == 'sorcerer'){
    var shopSorcerer = document.getElementById('sorcererShop');
    if (shopSorcerer.style.display === "none") {
          shopSorcerer.style.display = "block";
      } else {
          shopSorcerer.style.display = "none";
    }
    var show = document.getElementById('home');
    if (show.style.display === "none") {
          show.style.display = "block";
      } else {
          show.style.display = "none";
      }
  }
}
