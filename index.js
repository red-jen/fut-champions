const form = document.getElementById('form');
const playername = document.getElementById('playername');
const playerposition = document.getElementById('playerposition');
const playerrating = document.querySelector('#playerrating');

// form.addEventListener('submit',storedatafunction)
  


let players = [];
function storedatafunction(event){
    event.preventDefault();
    let player = {
    
     name : playername.value,
     position : playerposition.value,
     rating : playerrating.value 
    }
    players.push(player);
    document.forms[0].reset();   // dom alhmar mlk ktnsaha ha tselecte ga3 lforms (nodelist) li hiya arrraylike so ymkn lk tloopi 
    
  console.warn('added' , {players})


  // saving to local storage
  localStorage.setItem('player', JSON.stringify(players))   // needs to clarify this thing here 
}
form.addEventListener('submit',storedatafunction);
