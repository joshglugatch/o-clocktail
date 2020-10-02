// for CocktailBD API
$(document).ready(function () {
    $(".sidenav").sidenav();

    var currentTime = moment().format('LT');
    $('.time').html(currentTime);

    $(".randomizebtn").on("click", function () {
        $.ajax({
            type: "GET",
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            dataType: "json"
        }).then(function (response) {
            console.log(response);

      
            var responsiveImg = $(".drinkImgRes");
            var drinkName = $(".drinkName");
            var ingredientlist = $(".ingredientlist");
            var instructionList = $(".instructionList")

            var type = response.drinks[0].strDrink;
            drinkName.text("Drink: " + type);
        

            var ingredients = response.drinks[0].strIngredient1;
            ingredientlist.text("Ingredients: " + ingredients);

            var instructions = response.drinks[0].strInstructions;
            instructionList.text("Instructions: " + instructions);
        

            // var ingredients = [response.drink[0].strIngredient1,response.drink[0].strIngredient2,response.drink[0].strIngredient3,response.drink[0].strIngredient4,response.drink[0].strIngredient5,response.drink[0].strIngredient6,response.drink[0].strIngredient7,response.drink[0].strIngredient8,response.drink[0].strIngredient9,response.drink[0].strIngredient10]
            // for (var i = 0; i <= 10; i++){
            //     if(ingredients[i] !== null){
            //        var displayIngredients = $("<p>").text("Ingredients:" + ingredients);
            //     } else {
            //         return;
            //     }
            // }
            // randomize.append(displayIngredients);

            var imgURL = response.drinks[0].strDrinkThumb;
            responsiveImg.attr("src", imgURL);

        });
    })

    var queryURL = "https://icanhazdadjoke.com/search?term=bar&limit=30"
    
    $.ajax({
        url: queryURL,
        dataType: 'json',
        method: "GET"
    }).then(function(response) {
        console.log(response);
        i = Math.floor(Math.random() * 11); 
          $("#joke").append("<p>"+response.results[i].joke+"</p>") 
  })
});
