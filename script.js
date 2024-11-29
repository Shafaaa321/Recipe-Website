{
    Image1: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", 
    Header: "Chicken Handi",
    Paragraph: "Take a large pot or wok, big enough <br> to cook all the chicken, and heat the <br> oil in it. Once the oil is hot, add sliced <br> onion and fry them until deep gol...",
    Ingredient1: "Chicken - 1.2kg",
    Ingredient2: "Onion - 5 thinly sliced",
    Ingredient3: "Tomatoes - 2 finely chopped",
    Ingredient4: "Garlic - 8 cloves chopped",
    Ingredient5: "Ginger paste - 1tbsp",
    Image2: "https://www.youtube.com/watch?v=IO0issT0Rmc" 
}

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(response => response.json())
  .then(data => {
    const temperature = data.temperature;
    console.log('Current temperature:', temperature);
  })
  .catch(error => console.error('Error:', error));