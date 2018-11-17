var submittedButtons = [];

$(".search-btn").on("click", function(event){
    event.preventDefault();
    var search = $(".searchResult").val().trim();
    console.log(search)
    var btn = $("<button>")
    btn.addClass("gifBtn newBtn m-1 btn-hover color-4")
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
            images.attr("src", results[i].images.fixed_height.url);
            $("#trendingSection").prepend(images)
        }

    })
})

$(".gifBtn").on("click", function (event) {
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

