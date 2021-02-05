$.ajax({
        async: true,
        crossDomain: true,
        url: "https://webknox-jokes.p.rapidapi.com/jokes/search?numJokes=5&keywords=kick%2C%20hard&category=train&minRating=5",
        method: "GET",
        headers: {
            "x-rapidapi-key": "8a97f2a3f9msh62be3375f02e0ecp1b8eddjsndb0acdbb4d62",
            "x-rapidapi-host": "webknox-jokes.p.rapidapi.com"
        }
    }).then(function (response) {
	console.log(response);
});