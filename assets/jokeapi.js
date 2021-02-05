console.log("this connected")
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke?nsfw=false",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8a97f2a3f9msh62be3375f02e0ecp1b8eddjsndb0acdbb4d62",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
};

$("#jokebtn").click(function(){
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response.content);

        var joke = response.content

        
        console.log("this btn clicked");
        $("#joke").replaceWith(joke);

    });
});

