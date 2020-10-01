$("#submitBtn").on("click", function(event){
event.preventDefault();
$("#ingredients").empty();
$("#ingr").text("Ingredients:")
var drink = $("#searchInput").val();
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drink;
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
          var drinkName = response.drinks[0].strDrink;
          var instructions = response.drinks[0].strInstructions;
          var image = response.drinks[0].strDrinkThumb;
          $("#cardImage").attr("src", image)
          $("#drinkName").text(drinkName);
          $("#instructions").text(instructions);

          var ingArray = [response.drinks[0].strIngredient1,response.drinks[0].strIngredient2,response.drinks[0].strIngredient3,response.drinks[0].strIngredient4,response.drinks[0].strIngredient5,response.drinks[0].strIngredient6,response.drinks[0].strIngredient7,response.drinks[0].strIngredient8,response.drinks[0].strIngredient9,response.drinks[0].strIngredient10]
          for(var i = 1; i <= 10; i++){
            if(ingArray[i] !== null){
              $("#ingredients").append("<li>"+ingArray[i]+"</li>")
            } else {
              return;
            }
          }
  })

})