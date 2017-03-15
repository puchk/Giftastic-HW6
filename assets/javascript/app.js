var topics = ["LeBron James", "Kevin Durant", "James Harden", "Kawhi Leonard", "Russell Westbrook", "Steph Curry", "Chris Paul"];

// Creates a button and appends it to placeButtons div
function addButtons(names){
  var a = $("<button>");
  a.addClass("player");
  a.attr("data-player", names);
  a.text(names);
   $("#placeButtons").append(a);
}

// Uses addButtons function to create buttons for players in topics array
function startButtons(){
  for (var i=0; i<topics.length; i++){
    addButtons(topics[i]);
  }
}

$("#submitButton").on("click", function(){
  var userInput = $("#addPlayerInput").val().trim();
  
  // If input is empty
  if ($("#addPlayerInput").val().trim() === ""){
    alert("Please enter a name");
  }
  // If input has a value of the same button (is case sensitive)
  else if ($.inArray(userInput, topics) != -1) {
    alert("Player already entered");
  }
  else {
    // Create a button with input value using addButtons function 
    addButtons(userInput);
    // Adds input to player list
    topics.push(userInput);
    // Empties input
    $("#addPlayerInput").val('');
  }
});

// Gathers data from api and places data in divs
function displayGifs() {
  var player = $(this).attr("data-player");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
        .done(function(response) {
          // Removes any gifs already placed so shows one player at a time
          $("#placeGifs").empty();

        var playerData = response.data;

        // For each data object: create a gif div and append data inside
        for (var i = 0; i < playerData.length; i++) {
          var gifDiv = $("<div class='content'>");
          var rating = $("<p class='rating'>").text("Rating: " + playerData[i].rating);
          var stillImage = playerData[i].images.fixed_height_still.url;
          var movingImage = playerData[i].images.fixed_height.url;
          var image = $("<img>")
              image.attr({
                "src": stillImage, 
                "data-still": stillImage,
                "data-moving": movingImage,
                "data-isGifPlaying": "no"});
              image.addClass("playerGif");
            gifDiv.append(image);
            gifDiv.append(rating);
        // Place gif div in html
          $("#placeGifs").prepend(gifDiv);
        }
        })
}

// Uses displayGifs function when a player button is clicked
$(document).on("click", ".player", displayGifs);

//Start and Pause Gifs 
$(document).on("click", ".playerGif", function(){
	var isPlaying = $(this).attr("data-isGifPlaying");
	if (isPlaying === "no"){
		$(this).attr("src", $(this).attr("data-moving"));
		$(this).attr("data-isGifPlaying", "yes");
	}
	else{
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-isGifPlaying", "no");
	}

});

startButtons();