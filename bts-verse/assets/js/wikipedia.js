// https://stackoverflow.com/questions/26577292/is-there-a-way-to-embed-and-style-a-wikipedia-article-in-a-website



function wikipedia(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=BTS&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
};