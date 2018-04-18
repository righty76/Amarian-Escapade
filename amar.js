var character;

function knightStart(){
  character = "knight";
}

function sorcererStart(){
  character =  "sorcerer";
}

function archerStart(){
  character =  "archer";
}

function start(){
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
