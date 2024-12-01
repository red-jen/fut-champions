const form = document.getElementById('form');
const playername = document.getElementById('playername');
const playerposition = document.getElementById('playerposition');
const playerrating = document.querySelector('#playerrating');
const tecniqueSelect = document.getElementById('tecnique');
const pitch = document.getElementById('pitch');
const playerimg = document.getElementById('playerimg');   
const clubimg = document.getElementById('clubimg');       
const countryimg = document.getElementById('countryimg');
const pacrat = document.getElementById('pacrat');
const shorat = document.getElementById('shorat');
const passrat = document.getElementById('passrat');
const drirat = document.getElementById('drirat');
const defrat = document.getElementById('defrat');
const phyrat = document.getElementById('phyrat');
const nationality = document.getElementById('nationality');
const club = document.getElementById('club');
let players = [];
let playing = []; // players li dakhlin tiran
let benchplayers = [...players]

// localStorage.setItem('player', JSON.stringify(benchplayers));

    positions = {
        '4-4-2': [
            { position: 'GK', x: 50, y: 55 },
            { position: 'LB', x: 20, y: 30 },
            { position: 'CB', x: 35, y: 40 },
            { position: 'CB', x: 65, y: 40 },
            { position: 'RB', x: 80, y: 30 },
            { position: 'LM', x: 10, y: 10 },
            { position: 'CM', x: 40, y: 14 },
            { position: 'CM', x: 60, y: 14 },
            { position: 'RM', x: 90, y: 10 },
            { position: 'ST', x: 30, y: -10 },
            { position: 'ST', x: 70, y: -10 }
        ],
        '4-3-3': [
            { position: 'GK', x: 50, y: 60 },
            { position: 'LB', x: 10, y: 30 },
            { position: 'CB', x: 35, y: 40 },
            { position: 'CB', x: 65, y: 40 },
            { position: 'RB', x: 90, y: 30 },
            { position: 'CM', x: 30, y: 5 },
            { position: 'CM', x: 50, y: 15 },
            { position: 'CM', x: 70, y: 5 },
            { position: 'LW', x: 15, y: -10 },
            { position: 'ST', x: 50, y: -15 },
            { position: 'RW', x: 85, y: -10 }
        ]
    };
    function loadFromLocalStorage() {
      const savedPlayers = localStorage.getItem('players');
      if (savedPlayers) {
          players = JSON.parse(savedPlayers);
          displayers(players);
          renderFormation();
      }
  }
  
  // Add this event listener to load data when the page loads
  document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

    let firstCardIndex = null;
    let firstCardPlayer = null;
    
    function handleCardClick(index, playerArray) {
        if (firstCardIndex === null) {
            // First card selected
           
            firstCardIndex = index;
            firstCardPlayer = playerArray[index];
            // Add visual indication that card is selected (optional)
            console.log('First card selected:', firstCardPlayer.name);
        } else {
            // Second card selected - perform swap
            const secondCardPlayer = playerArray[index];
            if (firstCardPlayer.position !== secondCardPlayer.position) {
              window.alert('Cannot swap players with different positions');
              firstCardIndex = null;
              firstCardPlayer = null;
              return;
          }
            
            // Check if both players exist
            if (firstCardPlayer && secondCardPlayer) {
                // Find indices in the main players array
                const firstPlayerMainIndex = players.findIndex(p => p.name === firstCardPlayer.name);
                const secondPlayerMainIndex = players.findIndex(p => p.name === secondCardPlayer.name);
                
                // Perform the swap in the main players array
              
                    // Swap players
                    const temp = players[firstPlayerMainIndex];
                    players[firstPlayerMainIndex] = players[secondPlayerMainIndex];
                    players[secondPlayerMainIndex] = temp;
                    
                    // Reset the selection
                    firstCardIndex = null;
                    firstCardPlayer = null;
                    localStorage.setItem('players', JSON.stringify(players));
                    // Re-render everything
                    renderFormation();
                    displayers(players);
                    
                    console.log('Swap completed');
                    window.alert('swaped sucssessfuly');
                
            }
        }
    }



function storedatafunction(event){
    event.preventDefault();
    let player = {
    
     name : playername.value,
     photo: playerimg.value,
     position : playerposition.value,
     nationality : nationality.value, //
     flag: countryimg.value,
     club: club.value, //
     logo: clubimg.value,
     rating: playerrating.value,
     pace: parseInt(pacrat.value, 10),
     shooting : parseInt(shorat.value, 10),
     passing: parseInt(passrat.value, 10),
     dribbling: parseInt(drirat.value, 10),
     defending: parseInt(defrat.value, 10),
     physical: parseInt(phyrat.value, 10)
    }
    players.push(player);
    form.reset();   // dom alhmar mlk ktnsaha ha tselecte ga3 lforms (nodelist) li hiya arrraylike so ymkn lk tloopi 
    
  // console.warn('added' , {players})
  window.alert('yeah')

  

 
  // saving to local storage
  localStorage.setItem('player', JSON.stringify(players))   // needs to clarify this thing here 

  displayers(players);  // n3awdo n5wiw wn3mro lcontainer bzyada dyalna 
    renderFormation();
}

function renderFormation() {
    const tecnique = tecniqueSelect.value;
    pitch.innerHTML = '';
    playing = [];

    if (positions[tecnique]) {
        positions[tecnique].forEach(pos => {
            const div = document.createElement('div');
            div.classList.add('playerposition');
            div.style.left = `${pos.x}%`;
            div.style.top = `${pos.y}%`;
            div.textContent = pos.position;

            // Get players for the current position
            const positionPlayers = players.filter(p => p.position === pos.position);
            console.log(positionPlayers);

            // Find a player not already in playing array that i dlered on the line 19
            let availablePlayer = null;
            for (let player of positionPlayers) {
                if (!playing.includes(player)) {
                    availablePlayer = player;
                    break;
                }
            }

            if (availablePlayer) {
                playing.push(availablePlayer);

                div.innerHTML = `
              <div class="cardplayer">
        <div class="absolute flex items-center justify-center w-full h-screen">
            <div class="relative w-[100px] h-[152px] md:w-[120px] md:h-[212px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                <div class="relative flex text-[#e9cc74] px-[0.rem]">
                    <div class="absolute py-[0.4rem_0] text-xs sm:text-sm md:text-base uppercase font-light">
                        <div class="text-[0.3rem] sm:text-[0.5rem] md:text-[0.7rem] mt-2 p-1">${availablePlayer.rating}</div>
                        <div class="text-[0.3rem] sm:text-[0.5rem] md:text-[0.7rem] p-1">${availablePlayer.position}</div>
                        <div class="block my-[0.2rem_0]">
                            <img src="${availablePlayer.flag}" alt="Flag" class="w-[0.8rem] sm:w-[1rem] md:w-[1.2rem] h-[12px] sm:h-[14px] md:h-[11px] object-contain" />
                        </div>
                        <div class="block">
                            <img src="${availablePlayer.logo}" alt="Team" class="w-[0.4rem] sm:w-[1.1rem] md:w-[1.3rem] h-[16px] sm:h-[18px] md:h-[12px] object-contain" />
                        </div>
                    </div>
                    <div class="w-[50px] sm:w-[80px] md:w-[90px] h-[70px] sm:h-[80px] md:h-[80px] mx-auto overflow-hidden">
                        <img src="${availablePlayer.photo}" alt="${availablePlayer.name}" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                        <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] font-bold uppercase">
                            <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                            <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="text-[#e9cc74] w-[80%] mx-auto">
                        <div class="text-center text-[0.5rem] sm:text-[1.1rem] md:text-[0.7rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
                            <span class="block text-shadow-lg">${availablePlayer.name}</span>
                        </div>
                        <div class="flex justify-center mt-[0.2rem]">
                            <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.pace}</span>
                                    <span class="font-light">PAC</span>
                                </div>
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.shooting}</span>
                                    <span class="font-light">SHO</span>
                                </div>
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.passing}</span>
                                    <span class="font-light">PAS</span>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.dribbling}</span>
                                    <span class="font-light">DRI</span>
                                </div>
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.defending}</span>
                                    <span class="font-light">DEF</span>
                                </div>
                                <div class="flex items-center text-[0.4rem] sm:text-[0.8rem] md:text-[0.9rem] uppercase">
                                    <span class="font-bold mr-[0.2rem]">${availablePlayer.physical}</span>
                                    <span class="font-light">PHY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
                div.addEventListener('click', () => handleCardClick(players.indexOf(availablePlayer), players));
              
            }
            pitch.appendChild(div);
        });
    } else {
        console.warn(`Formation ${tecnique} not found.`);
    }
}

// lets spread this shit 





fetch('./API.json')
    .then(response => response.json())
    .then(playern => {
        // Only load API data if localStorage is empty
        if (!localStorage.getItem('players')) {
            players.push(...playern.players);
            localStorage.setItem('players', JSON.stringify(players));
        }
        displayers(players);
        renderFormation();
    });
                    

                    



                    function displayers(players) {
                      const cardscontainer = document.getElementById('cardscontainer');
                      cardscontainer.innerHTML = '';
                      renderFormation();
                  // console.log(playing);
                      players.forEach(player => {
                          // Check if the player is already in the 'playing' array
                          const isAlreadyPlaying = playing.some(playingPlayer => playingPlayer.name === player.name);
                  
                          if (!isAlreadyPlaying) {
                              // Create the card only if the player is not already playing
                              const card = document.createElement('div');
                              card.classList.add('cardplayer');
                              card.innerHTML = `
                                <div class="relative  md:w-[120px] md:h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                                  <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                                    <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                                      <div class="text-[0.9rem] mt-2">${player.rating}</div>
                                      <div class="text-[0.8rem]">${player.position}</div>
                                      <div class="block my-[0.2rem_0]">
                                        <img src="${player.flag}" alt="Flag" class="w-[0.8rem] h-[12px] object-contain" />
                                      </div>
                                      <div class="block">
                                        <img src="${player.logo}" alt="Team Logo" class="w-[0.9rem] h-[16px] object-contain" />
                                      </div>
                                    </div>
                                    <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                                      <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                                      <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="relative">
                                    <div class="text-[#e9cc74] w-[80%] mx-auto">
                                      <div class="text-center text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
                                        <span class="block text-shadow-lg overflow-hidden ">${player.name}</span>
                                      </div>
                                      <div class="flex justify-center mt-[0.2rem]">
                                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem]overflow-hidden">${player.pace}</span>
                                            <span class="font-light">PAC</span>
                                          </div>
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem]overflow-hidden">${player.shooting}</span>
                                            <span class="font-light">SHO</span>
                                          </div>
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem]overflow-hidden">${player.passing}</span>
                                            <span class="font-light">PAS</span>
                                          </div>
                                        </div>
                                        <div>
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem] overflow-hidden">${player.dribbling}</span>
                                            <span class="font-light">DRI</span>
                                          </div>
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem] overflow-hidden">${player.defending}</span>
                                            <span class="font-light">DEF</span>
                                          </div>
                                          <div class="flex items-center text-[0.7rem] uppercase">
                                            <span class="font-bold mr-[0.2rem] overflow-hidden ">${player.physical}</span>
                                            <span class="font-light">PHY</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              `;
                              card.addEventListener('click', () => handleCardClick(players.indexOf(player), players));
                              card.addEventListener('dblclick', () => {
                                // Find the index of the player in the players array
                                const playerIndex = players.findIndex(p => p.name === player.name);
                                
                                // Remove the player if found
                                if (playerIndex > -1) {
                                    players.splice(playerIndex, 1);
                                    
                                    // Update localStorage with the modified players array
                                    localStorage.setItem('players', JSON.stringify(players));
                                    
                                    // Re-render both the formation and the cards display
                                    renderFormation();
                                    displayers(players);
                                }
                            });
                              cardscontainer.appendChild(card);
                          }
                      });
                  }
                  
                   
form.addEventListener('submit',storedatafunction);
tecniqueSelect.addEventListener('change', renderFormation); 
                   