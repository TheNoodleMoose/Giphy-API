// array that holds values for the button classes to style new buttons 
var colorOptions = ["color-2","color-3","color-4", "color-5","color-6","color-7","color-8", "color-9", "color-10", "color-11"];
// array that holds the values for the gif classes that style the bottom
var gifBottom = ["gif-bottom-red", "gif-bottom-blue", "gif-bottom-purple", "gif-bottom-green"]

//THIS IS FOR THE TRENDING SECTION AJAX REQUEST
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=oYO3qWVRQJ8coSdr6nEQg4APTLmHHhCT&limit=4";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var images = $("<img>");
            images.addClass("gifs")
            //After graded rememeber to remove the the still image feature because its not necessary, src will just go back to fix_height.url
            images.attr("data-state", "still")
            images.attr("data-still", results[i].images.fixed_height_still.url)
            images.attr("data-animate", results[i].images.fixed_height.url)
            images.attr("src", images.attr("data-still"));
            $("#trendingSection").prepend(images)
        }

    })

//This is what runs the ajax and button generating when the search button is hit
$(".search-btn").on("click", function(event){
    event.preventDefault();
    var randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    var search = $(".searchResult").val().trim();
    console.log(search)
    var btn = $("<button>")
    btn.addClass("gifBtn newBtn m-1 btn-hover");
    btn.addClass(randomColor)
    btn.text(search)
    btn.attr("data", search)
    $(".buttonsGoHere").append(btn)
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=oYO3qWVRQJ8coSdr6nEQg4APTLmHHhCT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var images = $("<img>");
            images.addClass("gifs")
            images.addClass(randomColor)
            //After graded rememeber to remove the the still image feature because its not necessary, src will just go back to fix_height.url
            images.attr("data-state", "still")
            images.attr("data-still", results[i].images.fixed_height_still.url)
            images.attr("data-animate", results[i].images.fixed_height.url)
            images.attr("src", images.attr("data-still"));
            $("#gifsGoHere").prepend(images)
        }

    })
})

// This is what generates the gifs once the button is clicked for what they want to generate
$(".gifBtn").on("click", function (event) {
    event.preventDefault();
    var selection = $(this).attr("data")
    var randomColor = gifBottom[Math.floor(Math.random() * gifBottom.length)];
    console.log("This is working")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selection + "&api_key=oYO3qWVRQJ8coSdr6nEQg4APTLmHHhCT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var images = $("<img>");
            images.addClass("gifs")
            images.addClass(randomColor)
            //After graded rememeber to remove the the still image feature because its not necessary, src will just go back to fix_height.url
            images.attr("data-state", "still")
            images.attr("data-still", results[i].images.fixed_height_still.url)
            images.attr("data-animate", results[i].images.fixed_height.url)
            images.attr("src", images.attr("data-still"));
            $("#gifsGoHere").prepend(images)
        }

    })
})

$(".clearSearches").on("click", function() {
    $("#gifsGoHere").empty()
})

//Remove this because pausing is not needed after grading
$(document).on("click", ".gifs" , function() {
    var state = $(this).attr("data-state")

    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animate")
    }

    if(state === "animate") {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
})

//This is for the newly generated buttons to get them to send the request for the ajax
$(document).on("click", ".newBtn", function(){
    event.preventDefault();
    var selection = $(this).attr("data")
    console.log("This is working")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selection + "&api_key=oYO3qWVRQJ8coSdr6nEQg4APTLmHHhCT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var images = $("<img>");
            images.addClass("gifs")
            images.attr("src", results[i].images.fixed_height.url);
            $("#trendingSection").prepend(images)
        }

    })
  })

