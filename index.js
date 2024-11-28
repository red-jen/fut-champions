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
let players = [];
let playing = []; // players li dakhlin tiran
let benchplayers = [...players]

// localStorage.setItem('player', JSON.stringify(benchplayers));

    positions = {
        '4-4-2': [
            { position: 'GK', x: 50, y: 55 },
            { position: 'LB', x: 20, y: 35 },
            { position: 'CB', x: 35, y: 35 },
            { position: 'CB', x: 65, y: 35 },
            { position: 'RB', x: 80, y: 35 },
            { position: 'LM', x: 40, y: 20 },
            { position: 'CM', x: 40, y: 10 },
            { position: 'CM', x: 60, y: 10 },
            { position: 'RM', x: 80, y: 10 },
            { position: 'ST', x: 17, y: -10 },
            { position: 'ST', x: 85, y: -10 }
        ],
        '4-3-3': [
            { position: 'GK', x: 50, y: 85 },
            { position: 'LB', x: 20, y: 25 },
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

    let firstCardIndex = null;
    let firstCardArray = null;
    
    function handleCardClick(index, sourceArray) {
        if (firstCardIndex === null) {
            // First card selected
            firstCardIndex = index;
            firstCardArray = sourceArray;
            console.log(firstCardIndex,firstCardArray[firstCardIndex]);
            console.log(firstCardArray);
            // document.querySelectorAll('.cardplayer')[index].classList.add('selected');
        } else {
          console.log(index,sourceArray[index]);
          console.log(sourceArray);
            // Second card selected, perform the swap
          
                // Determine which arrays we're working with
                let temp = firstCardArray[firstCardIndex];
                firstCardArray[firstCardIndex] = sourceArray[index];
                sourceArray[index] = temp;

                // console.log(firstCardIndex,firstCardArray[firstCardIndex]);
                // console.log(firstCardArray);
                // console.log(index,sourceArray[index]);
                // console.log(sourceArray);
                  // Refresh both displays
            displayers(benchplayers)
            renderFormation();
          
            }
            console.table(benchplayers);
            console.table(playing);

            firstCardIndex = null;
            firstCardArray = null;
          
            // Reset selection
           
            // document.querySelectorAll('.cardplayer').forEach(card => 
            //     card.classList.remove('selected'));
        
      
    }


    
  function redisplay(benchplayers){
    const cardscontainer = document.getElementById('cardscontainer');
    cardscontainer.innerHTML = '';
    benchplayers.forEach(benchplayer => {
      
      // console.log('bench player raha khdaaaaama a sidi')
      const card = document.createElement('div');
      card.classList.add('cardplayer');
      card.innerHTML = `
      <div class="cardplayer">
      <div class="absolute flex items-center justify-center w-full h-screen">
      <div class="relative w-[120px] h-[192px] bg-cover bg-center  bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
        <div class="relative flex text-[#e9cc74] px-[0.6rem]">
          <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
            <div class="text-[0.9rem] mt-2">97</div>
            <div class="text-[0.8rem]">RW</div>
            <div class="block my-[0.2rem_0]">
              <img src="${benchplayer.flag}" alt="Argentina" class="w-[0.8rem] h-[12px] object-contain" />
            </div>
            <div class="block">
              <img src="${benchplayer.logo}" alt="Barcelona" class="w-[0.9rem] h-[16px] object-contain" />
            </div>
          </div>
          <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
            <img src="${benchplayer.photo}" alt="Messi" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
            <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
              <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
              <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="text-[#e9cc74] w-[80%] mx-auto">
            <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
              <span class="block text-shadow-lg">${benchplayer.name}</span>
            </div>
            <div class="flex justify-center mt-[0.2rem]">
              <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">97</span>
                  <span class="font-light">PAC</span>
                </div>
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">95</span>
                  <span class="font-light">SHO</span>
                </div>
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">94</span>
                  <span class="font-light">PAS</span>
                </div>
              </div>
              <div>
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">99</span>
                  <span class="font-light">DRI</span>
                </div>
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">35</span>
                  <span class="font-light">DEF</span>
                </div>
                <div class="flex items-center text-[0.7rem] uppercase">
                  <span class="font-bold mr-[0.2rem]">68</span>
                  <span class="font-light">PHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      `;
      card.addEventListener('click', () => handleCardClick(playing.indexOf(benchplayer)));
    
      cardscontainer.appendChild(card)
    })  
  }
    // Add click event listeners to all boxes
  

// form.addEventListener('submit',storedatafunction)
  







function storedatafunction(event){
    event.preventDefault();
    let player = {
    
     name : playername.value,
     position : playerposition.value,
     rating: parseInt(playerrating.value, 10),
     imgUrl: playerimg.value,
     clubImgUrl: clubimg.value,
     countryImgUrl: countryimg.value,
     pac: parseInt(pacrat.value, 10),
     sho: parseInt(shorat.value, 10),
     pas: parseInt(passrat.value, 10),
     dri: parseInt(drirat.value, 10),
     def: parseInt(defrat.value, 10),
     phy: parseInt(phyrat.value, 10)
    }
    players.push(player);
    document.forms[0].reset();   // dom alhmar mlk ktnsaha ha tselecte ga3 lforms (nodelist) li hiya arrraylike so ymkn lk tloopi 
    
  // console.warn('added' , {players})
  window.alert('yeah')

  displayers(players); // n3awdo n5wiw wn3mro lcontainer bzyada dyalna 

  renderFormation();
  // saving to local storage
  localStorage.setItem('player', JSON.stringify(players))   // needs to clarify this thing here 
}

function renderFormation() {
    const tecnique = tecniqueSelect.value; // Read selected formation
    pitch.innerHTML = ''; // Clear previous pitch
    playing = [];
  // console.log('haaay im executed')
    if (positions[tecnique]) {
        positions[tecnique].forEach(pos => {
            // console.log((pos.position === 'LM')? pos.x : 'notfound');
            const div = document.createElement('div');
            div.classList.add('playerposition');
            div.style.left = `${pos.x}%`;
            div.style.top = `${pos.y}%`;
            div.textContent = pos.position;
            // console.log('hay')
          

            // Find player for the current position
            const player = players.find(p => p.position === pos.position);
            if (player) {
           
              playing.push(player);
              // console.log(playing);
              // localStorage.setItem('playings', JSON.stringify(playing));
            }
          
            if (playing.includes(player)) {
                div.innerHTML = `
                <div class="cardplayer">
                <div class="absolute flex items-center justify-center w-full h-screen">
                <div class="relative w-[120px] h-[192px] bg-cover bg-center  bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                  <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                    <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                      <div class="text-[0.9rem] mt-2">97</div>
                      <div class="text-[0.8rem]">RW</div>
                      <div class="block my-[0.2rem_0]">
                        <img src="${player.flag}" alt="Argentina" class="w-[0.8rem] h-[12px] object-contain" />
                      </div>
                      <div class="block">
                        <img src="${player.logo}" alt="Barcelona" class="w-[0.9rem] h-[16px] object-contain" />
                      </div>
                    </div>
                    <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                      <img src="${player.photo}" alt="Messi" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                      <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                      </div>
                    </div>
                  </div>
                  <div class="relative">
                    <div class="text-[#e9cc74] w-[80%] mx-auto">
                      <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
                        <span class="block text-shadow-lg">${player.name}</span>
                      </div>
                      <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">97</span>
                            <span class="font-light">PAC</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">95</span>
                            <span class="font-light">SHO</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">94</span>
                            <span class="font-light">PAS</span>
                          </div>
                        </div>
                        <div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">99</span>
                            <span class="font-light">DRI</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">35</span>
                            <span class="font-light">DEF</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                            <span class="font-bold mr-[0.2rem]">68</span>
                            <span class="font-light">PHY</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                `;
                div.addEventListener('click', () => handleCardClick(playing.indexOf(player), playing));
                // console.log(playing.indexOf(player));
            }
            pitch.appendChild(div);
        });
    } else {
        // console.warn(`Formation ${tecnique} not found.`);
    }
    // console.log(playing);
}


// lets spread this shit 





fetch('./API.json').then(response =>response.json() )
                    .then(playern => {players.push(...playern.players)
                        
                        displayers(players);
                        renderFormation();
                       
                    });
                    

                    




                    function displayers(benchplayers){
                        // console.log(benchplayers)
                        const cardscontainer = document.getElementById('cardscontainer');
                        cardscontainer.innerHTML = '';
                     
                        benchplayers.map( (player) => {
                        
                    
                        // console.log('bench player raha khdaaaaama a sidi')
                        const card = document.createElement('div');
                        card.classList.add('cardplayer');
                        card.innerHTML=`
              <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                  <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2">${player.rating}</div>
                    <div class="text-[0.8rem]">${player.position}</div>
                    <div class="block my-[0.2rem_0]">
                      <img src="${player.flag}" alt="Argentina" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                      <img src="${player.logo}" alt="Barcelona" class="w-[0.9rem] h-[16px] object-contain" />
                    </div>
                  </div>
                  <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${player.photo}" alt="Messi" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                      <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                      <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
                      <span class="block text-shadow-lg">${player.name}I</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                      <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.pace}</span>
                          <span class="font-light">PAC</span>
                        </div>
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.shooting}</span>
                          <span class="font-light">SHO</span>
                        </div>
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.passing}</span>
                          <span class="font-light">PAS</span>
                        </div>
                      </div>
                      <div>
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.dribbling}</span>
                          <span class="font-light">DRI</span>
                        </div>
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.defending}</span>
                          <span class="font-light">DEF</span>
                        </div>
                        <div class="flex items-center text-[0.7rem] uppercase">
                          <span class="font-bold mr-[0.2rem]">${player.physical}</span>
                          <span class="font-light">PHY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

  `;
  card.addEventListener('click', () => handleCardClick(benchplayers.indexOf(player), benchplayers));
                                              
                                                cardscontainer.appendChild(card)
                     })
                    
                    }


                   
form.addEventListener('submit',storedatafunction);
tecniqueSelect.addEventListener('change', renderFormation); 
                   