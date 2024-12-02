function storedatafunction(event) {
  event.preventDefault();

  // Check if files are selected
  let playerPhotoFile = playerimg.files[0];
  let flagFile = countryimg.files[0];
  let clubLogoFile = clubimg.files[0];

  // Convert files to URLs
  let playerPhotoURL = playerPhotoFile ? URL.createObjectURL(playerPhotoFile) : null;
  let flagURL = flagFile ? URL.createObjectURL(flagFile) : null;
  let clubLogoURL = clubLogoFile ? URL.createObjectURL(clubLogoFile) : null;

  let player = {
    name: playername.value,
    photo: playerPhotoURL, // Store the URL
    position: playerposition.value,
    nationality: nationality.value,
    flag: flagURL, // Store the URL
    club: club.value,
    logo: clubLogoURL, // Store the URL
    rating: playerrating.value,
    pace: parseInt(pacrat.value, 10),
    shooting: parseInt(shorat.value, 10),
    passing: parseInt(passrat.value, 10),
    dribbling: parseInt(drirat.value, 10),
    defending: parseInt(defrat.value, 10),
    physical: parseInt(phyrat.value, 10)
  };

  players.push(player);
  form.reset();

  window.alert('Yeah!! You’ll find the player on the bench now');

  // Optional: Refresh the UI to show the new player
  displayPlayer(player); // Function to display the player data, including images
}
