const fetchMealData = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        
        if (data.meals) {
            displayMeals(data.meals);
        } else {
            console.log("No meals found");
        }
    } catch (error) {
        console.error('Error fetching meal data:', error);
    }
};

const displayMeals = (meals) => {
    const MealsContainer = document.getElementById('Meals');
    MealsContainer.innerHTML = ''; 

    meals.forEach(meal => {
    

        const recipeList = document.createElement('div');
        recipeList.classList.add('recipe'); 

        const card = document.createElement('div');
        card.classList.add('cards'); 

        
        const mealImage = document.createElement('img');
        mealImage.src = meal.strMealThumb; 
        mealImage.alt = meal.strMeal; 
        mealImage.classList.add('food-pic');
        card.appendChild(mealImage);

        
        const mealName = document.createElement('h2');
        mealName.classList.add('name'); 
        mealName.textContent = meal.strMeal; 
        card.appendChild(mealName);

        
        const mealMethod = document.createElement('p');
        mealMethod.classList.add('method'); 
        mealMethod.innerHTML = meal.strInstructions.substring(0, 100).replace(/\n/g, '<br>') + '...'; 
        card.appendChild(mealMethod);

        
        const ingredientList = document.createElement('ul');
        ingredientList.classList.add('ingredients');

        
        for (let i = 1; i <= 5; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && measure) {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = `${ingredient} - ${measure}`; 
                ingredientList.appendChild(ingredientItem);
            }
        }
        card.appendChild(ingredientList);

        
        const watchVideoLink = document.createElement('a');
        watchVideoLink.href = meal.strYoutube; 
        watchVideoLink.target = '_blank'; 
        watchVideoLink.textContent = 'Watch Video'; 
        card.appendChild(watchVideoLink);


        recipeList.appendChild(card);
        MealsContainer.appendChild(recipeList); 
    });
};


fetchMealData();
