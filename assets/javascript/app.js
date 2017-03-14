var topics = ["LeBron James", "Kevin Durant", "James Harden", "Kawhi Leonard", "Russell Westbrook", "Steph Curry", "Chris Paul"];



    for (var i=0; i<topics.length; i++){
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("player");
          // Adding a data-attribute
          a.attr("data-player", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the buttons-view div
          $("#placeButtons").append(a);
	}


$("button").on("click", function(){
	var player = $(this).attr("data-player");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
        .done(function(response) {

       		var playerData = response.data;

	    	for (var i = 0; i < playerData.length; i++) {
    			var gifDiv = $("<div class='content'>");
    			var rating = $("<p>").text("Rating: " + playerData[i].rating);
    			var stillImage = playerData[i].images.fixed_height_still.url;
    			var movingImage = playerData[i].images.fixed_height.url;
    			var image = $("<img>")
            		image.attr("src", stillImage);
            		image.attr("data-still", stillImage);
            		image.attr("data-moving", movingImage);
            		image.attr("data-isGifPlaying", "no");
            		image.addClass("playerGif");
              gifDiv.append(image);
              gifDiv.append(rating);
        
              $("#placeGifs").prepend(gifDiv);
            }
    
          
	$(".playerGif").on("click", function(){
		var isPlaying = $(this).attr("data-isGifPlaying");
		console.log(isPlaying==="no");
		if (isPlaying === "no"){
			$(this).attr("src", $(this).attr("data-moving"));
			$(this).attr("data-isGifPlaying", "yes");
		}
		else{
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-isGifPlaying", "no");
		}
	});

        });
        });

