

$("button").on("click", function () {
    var selection = $(this).attr("data")

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + selection + "&api_key=oYO3qWVRQJ8coSdr6nEQg4APTLmHHhCT&limit=10";

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
