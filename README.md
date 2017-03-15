## HW - {Giftastic-HW6}

### Live Link
 - https://puchk.github.io/Giftastic-HW6/

### Overview
 - In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.
 
### Instructions/Requirements
 - Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
 - Your app should take the topics in this array and create buttons in your HTML.
 - When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
 - When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
 - Under every gif, display its rating (PG, G, so on).
 - This data is provided by the GIPHY API.
 - Only once you get images displaying with button presses should you move on to the next step.
 - Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

### Technologies Used
 - Giphy API
 - JQuery
 - Bootstrap

### Code Example of Creating a Function with Parameters
    function addButtons(names){
      var a = $("<button>");
      a.addClass("player");
      a.attr("data-player", names);
      a.text(names);
       $("#placeButtons").append(a);
    }

### Code Example of Using Same Function with Arguments
    function startButtons(){
      for (var i=0; i<topics.length; i++){
        addButtons(topics[i]);
      }
    }