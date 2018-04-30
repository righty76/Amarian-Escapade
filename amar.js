var character;
var health;
var enemyHealth;

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
  if(character = knight){
    battle(character, 200);
    console.log("explore",character);
  } else if(character = archer){
    battle(character, 150);
    console.log("explore", character);
  } else if(character = sorcerer){
    battle(character, 100);
    console.log("explore", character);
  }
}

function attack(enemy){

  if(character = knight){
    battle(character, 200);
    console.log("explore",character);
  } else if(character = archer){
    battle(character, 150);
    console.log("explore", character);
  } else if(character = sorcerer){
    battle(character, 100);
    console.log("explore", character);
  }
}

function healthRestore(){
  if(character = knight){
    health = 200;
  } else if(character = archer){
    health = 150;
  } else if(character = sorcerer){
    health = 100;
  }
}

function battle(character, health){
  if(character = knight){
    enemyHealth = enemyHealth-25;
  } else if(character = archer){
    enemyHealth = enemyHealth-50;
  } else if(character = sorcerer){
    enemyHealth = 100;
  }
}

function shop(character){
  if(character = knight){
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
  } else if(character = archer){
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
  } else if(character = sorcerer){
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
