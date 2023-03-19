const apiKey = "ZRf2ijG6bg0QNbQoKTAIk77ECypW8XMqgNJgdJnf";
let food1 = document.getElementById("food1")
let food2 = document.getElementById("food2")

// Get the user input of ingredients
var input = document.getElementById("potato");
var submit = document.getElementById("submit");

var foods = "";

submit.addEventListener('click',getText);

function getText(event){
  foods = input.value;
  for (key in nutrients){
    if (foods.localeCompare(key) == 0){
      let protein = "protein: " + nutrients[key]['protein'];
      let carbs = " carbs: " + nutrients[key]['carbohydrate'];
      food1.innerHTML = protein + carbs;
      if (nutrients[key]['protein'] > 20) {
        food2.innerHTML = "That's great, Sheeper is getting enough protein for lunch!";
      } else {
        food2.innerHTML = "You might want to reconsider what Sheeper wants for lunch.";
      };
      
    }
  }}

const nutrients = {
  chicken: { protein: 23.9, carbohydrate: 0 },
  cookies: { protein: 5.79, carbohydrate: 69.6 },
};

if (nutrients.hasOwnProperty(food)) {
  // Get the nutrient values for the inputted food
  const { protein, carbohydrate } = nutrients[food];

  // Output the nutrient values for the inputted food
  console.log(`protein = ${protein}g and carbohydrate = ${carbohydrate}g`);

  // Check if the protein content is greater than 20g

} else {
  console.log("Sorry, I don't know the nutrient values for that food item.");
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
