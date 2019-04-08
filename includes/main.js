

$(function(){
    //gegevenss van de aanvraag en verbinding met api gegevens
    //verander deze als je het wilt gebruiken op een andere site of een andere locatie/onderwerp

    var opts = {
        method: 'flickr.photos.search',                 //aangegeven methode van flickr om op foto te zoeken die te maken hebben met het onderwerp
        api_key: '506f15058ab896701454d66a80768afc',    //flickr api key veradner als gebruik wordt voor andere website
        sort: 'date-taken-desc',                        //methode van laten zien, date-taken-desc, relevance
        license: 4,                                   //licensie commerciel mogenlijk gebruik
        text: 'spangen',                                //onderwerp van zoeken
        extras: 'url_m',
        per_page: 4,                                    //gewenste hoeveelheid foto's
        format: 'json',                                 //ophalen in json formaat
        nojsoncallback: 1
    };

    //volgende gedeelte haalt de api op met de voor gegeven onderdelen hier boven
    //en plaatst ze in de goede volgorde
    $.get('http://api.flickr.com/services/rest/', opts, function(resp){
        var images;
        if (resp.stat === "ok") {
            images = $('<ul>', {'class': 'gallery'})
            $.each(resp.photos.photo, function(index, value){
                var image = $('<li>', {
                    'class': 'gallery__item'
                }).append($('<img>', {
                    src: value.url_m,
                    title: value.title,
                    
                })).appendTo(images);
            });
            images.appendTo('body');
        }
        else {
            console.log('not ok', resp);
        }
    })
})
