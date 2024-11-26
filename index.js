const form = document.getElementById('form');
const playername = document.getElementById('playername');
const playerposition = document.getElementById('playerposition');
const playerrating = document.querySelector('#playerrating');

let players = [];

    positions = {
        '4-4-2': [
            { position: 'GK', x: 50, y: 85 },
            { position: 'LB', x: 20, y: 65 },
            { position: 'CB', x: 35, y: 65 },
            { position: 'CB', x: 65, y: 65 },
            { position: 'RB', x: 80, y: 65 },
            { position: 'LM', x: 20, y: 40 },
            { position: 'CM', x: 40, y: 40 },
            { position: 'CM', x: 60, y: 40 },
            { position: 'RM', x: 80, y: 40 },
            { position: 'ST', x: 35, y: 15 },
            { position: 'ST', x: 65, y: 15 }
        ],
        '4-3-3': [
            { position: 'GK', x: 50, y: 85 },
            { position: 'LB', x: 20, y: 65 },
            { position: 'CB', x: 35, y: 65 },
            { position: 'CB', x: 65, y: 65 },
            { position: 'RB', x: 80, y: 65 },
            { position: 'CM', x: 30, y: 40 },
            { position: 'CM', x: 50, y: 40 },
            { position: 'CM', x: 70, y: 40 },
            { position: 'LW', x: 20, y: 15 },
            { position: 'ST', x: 50, y: 15 },
            { position: 'RW', x: 80, y: 15 }
        ]
    };





// form.addEventListener('submit',storedatafunction)
  



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
  window.alert('yeah')

  displayers(players); // n3awdo n5wiw wn3mro lcontainer bzyada dyalna 

  renderFormation();
  // saving to local storage
  localStorage.setItem('player', JSON.stringify(players))   // needs to clarify this thing here 
}

function renderFormation() {
    const tecnique = tecniqueSelect.value; // Read selected formation
    pitch.innerHTML = ''; // Clear previous pitch

    if (positions[tecnique]) {
        positions[tecnique].forEach(pos => {
            const div = document.createElement('div');
            div.classList.add('player-position');
            div.style.left = `${pos.x}%`;
            div.style.top = `${pos.y}%`;
            div.textContent = pos.position;

            // Find player for the current position
            const player = players.find(p => p.position === pos.position);
            if (player) {
                div.innerHTML = `
                    <div class="player-card">
                        <div class="player-rating">${player.rating}</div>
                        <div class="player-name">${player.name}</div>
                    </div>
                `;
            }
            pitch.appendChild(div);
        });
    } else {
        console.warn(`Formation ${tecnique} not found.`);
    }
}


// lets spread this shit 





fetch('./API.json').then(response =>response.json() )
                    .then(playern => {players.push(...playern.players)
                        
                        displayers(players);
                       
                    });
                    

                    




                    function displayers(players){
                        console.log(players)
                        const cardscontainer = document.getElementById('cardscontainer');
                        cardscontainer.innerHTML = '';
                        let count=0;
                     players.map( (player) => {
                        
                        count++;
                        console.log('hello')
                        const card = document.createElement('div');
                        card.classList.add('player-card');
                        card.innerHTML=`
                            <div>${count}</div>
                                                `;
                                              
                                                cardscontainer.appendChild(card)
                     })
                    
                    }



form.addEventListener('submit',storedatafunction);
tecniqueSelect.addEventListener('change', renderFormation); 
                   