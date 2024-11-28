function renderFormation() {
    const tecnique = tecniqueSelect.value;
    pitch.innerHTML = '';
    playing = []; // Reset playing array

    if (positions[tecnique]) {
        positions[tecnique].forEach(pos => {
            const div = document.createElement('div');
            div.classList.add('playerposition');
            div.style.left = `${pos.x}%`;
            div.style.top = `${pos.y}%`;
            div.textContent = pos.position;

            // Find player for the current position
            const playerIndex = players.findIndex(p => p.position === pos.position);
            if (playerIndex !== -1) {
                const player = players[playerIndex];
                playing.push(player);
                
                // Remove from benchplayers if not already there
                const benchIndex = benchplayers.findIndex(p => p === player);
                if (benchIndex !== -1) {
                    benchplayers.splice(benchIndex, 1);
                }

                div.innerHTML = `
                    // ... (your existing card HTML)
                `;
                div.addEventListener('click', () => handleCardClick(playing.indexOf(player), playing));
            }
            pitch.appendChild(div);
        });
    }
    
    // Update the bench display
    displayers(benchplayers);
}