function handleCardClick(index, sourceArray) {
    if (firstCardIndex === null) {
        // First card selected
        firstCardIndex = index;
        firstCardArray = sourceArray;
        document.querySelectorAll('.cardplayer')[index].classList.add('selected');
    } else {
        // Second card selected, perform the swap
        if (firstCardIndex !== index || firstCardArray !== sourceArray) {
            // Swap players between arrays
            const temp = firstCardArray[firstCardIndex];
            firstCardArray[firstCardIndex] = sourceArray[index];
            sourceArray[index] = temp;
            
            // Update both displays
            displayers(benchplayers);
            renderFormation();
        }
        // Reset selection
        firstCardIndex = null;
        firstCardArray = null;
        document.querySelectorAll('.cardplayer').forEach(card => 
            card.classList.remove('selected'));
    }
}