
    $(".sidenav").sidenav();

    $(".results").hide()

    var drink;

$(".click1").on("click", function(){
    drink = "Owen's Grandmother's Revenge";
    displayCard();

}) 

$(".click2").on("click", function(){
    drink = "Bob Marley";
    displayCard();

}) 

$(".click3").on("click", function(){
    drink = "Whiskey Sour";
    displayCard();

}) 

$(".click4").on("click", function(){
    drink = "Zizi Coin-coin";
    displayCard();

}) 


function displayCard() {

    $("#ingredients").empty();
    $(".results").show()
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
                    $("#ingredients").append(qtyArray[i] + " ")
                }
                if (ingArray[i] !== null) {
                    $("#ingredients").append(ingArray[i] + ", ")
                } else {
                    return;
                }
            }

    })
} 





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


