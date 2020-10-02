// for CocktailBD API
$(document).ready(function () {
    $(".sidenav").sidenav();


    var currentTime = moment().format('h');
    $('.time').text(currentTime + " " + "   o'Clocktail");

    var militaryTime = moment().format('H');
    console.log(militaryTime)


    var morning = ["Mimosa", "Bloody Mary", "Sangria", "Champagne Cocktail", "Irish Coffee", "Amaretto Tea", "Kioki Coffee", "Belini", "Tequila Sunrise"];
    var afternoon = ["Rum Punch", "Raspberry Julep", "Mint Julep", "Cosmopolitan Martini", "Planter's Punch", "Gin Basil Smash", "Tequila Slammer", "Vodka Fizz", "Mojito", "Death in the Afternoon"];
    var evening = ["Whiskey Sour", "Old Fashioned", "Manhattan", "Brandon and Will's Coke Float", "Dirty Martini", "Espresso Martini", "Penicillin", "Gin Sour", "Dark and Stormy", "Casino Royale"];


    i = Math.floor(Math.random() * 10);

    var morningDrink = morning[i];
    var afternoonDrink = afternoon[i];
    var eveningDrink = evening[i];

    var drink;
    if (militaryTime < 12 && militaryTime >= 4) {
        drink = morningDrink
    } else if (militaryTime >= 12 && militaryTime < 20) {
        drink = afternoonDrink
    } else if (militaryTime >= 20 || militaryTime < 4) {
        drink = eveningDrink
    }

    var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;



    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $("#ingr").text("Ingredients:")
        
            var drinkName = response.drinks[0].strDrink;
            var instructions = response.drinks[0].strInstructions;
            var image = response.drinks[0].strDrinkThumb;
            var x = response.drinks[0]
            $("#cardImage").attr("src", image)
            $("#drinkName").text(drinkName);
            $("#instructions").text(instructions);
            var ingArray = [response.drinks[0].strIngredient1, response.drinks[0].strIngredient2, response.drinks[0].strIngredient3, response.drinks[0].strIngredient4, response.drinks[0].strIngredient5, response.drinks[0].strIngredient6, response.drinks[0].strIngredient7, response.drinks[0].strIngredient8, response.drinks[0].strIngredient9, response.drinks[0].strIngredient10]
            var qtyArray = [x.strMeasure1, x.strMeasure2, x.strMeasure3, x.strMeasure4, x.strMeasure5, x.strMeasure6, x.strMeasure7, x.strMeasure8, x.strMeasure9, x.strMeasure10,]
            for (var i = 0; i <= 10; i++) {
                if (qtyArray[i] !== null) {
                    $("#ingredients").append(qtyArray[i])
                }
                if (ingArray[i] !== null) {
                    $("#ingredients").append(ingArray[i] + ", ")
                } else {
                    return;
                }
            }

    })


    var queryURL = "https://icanhazdadjoke.com/search?term=bar&limit=30"

    $.ajax({
        url: queryURL,
        dataType: 'json',
        method: "GET"
    }).then(function (response) {
        console.log(response);
        i = Math.floor(Math.random() * 11);
        $("#joke").append("<p>" + response.results[i].joke + "</p>")
    })
});





    // $(".randomizebtn").on("click", function () {
    //     $.ajax({
    //         type: "GET",
    //         url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    //         dataType: "json"
    //     }).then(function (response) {
    //         console.log(response);


    //         var responsiveImg = $(".drinkImgRes");
    //         var drinkName = $(".drinkName");
    //         var ingredientlist = $(".ingredientlist");
    //         var instructionList = $(".instructionList")

    //         var type = response.drinks[0].strDrink;
    //         drinkName.text("Drink: " + type);


    //         var ingredients = response.drinks[0].strIngredient1;
    //         ingredientlist.text("Ingredients: " + ingredients);

    //         var instructions = response.drinks[0].strInstructions;
    //         instructionList.text("Instructions: " + instructions);


    //         var imgURL = response.drinks[0].strDrinkThumb;
    //         responsiveImg.attr("src", imgURL);

    //     });

    //           })

