const apiKey = "ZRf2ijG6bg0QNbQoKTAIk77ECypW8XMqgNJgdJnf";

// Get the user input of ingredients
var input = document.getElementById("potato").value;
var submit = document.getElementById("submit");

submit.addEventListener('click',getText);

function getText(event){
  console.log(input);
}

// Split the input string into an array of ingredients
const ingredients = inputIngredients.split(",").map(ingredient => ingredient.trim());

// API endpoint
const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${ingredients.join(",")}`;

// Get request
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the food items from the JSON data
    const foods = data.foods;

    // Loop through the food items and log their nutrient information
    foods.forEach(food => {
      console.log(food.description);
      console.log("Nutrients:");
      food.foodNutrients.forEach(nutrient => {
        console.log(`${nutrient.nutrientName}: ${nutrient.value} ${nutrient.unitName}`);
      });
      console.log("----");
    });
  })
  .catch(error => console.error(error));
