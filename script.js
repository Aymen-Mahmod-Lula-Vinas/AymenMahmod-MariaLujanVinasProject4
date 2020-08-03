
// print it on the HTML

// namespace
const cocktailApp = {};
let variable = [];
// listen to a click event- user choice- that will return a value. create a variable to store the result
$(".button").on('click', function(event) {
    event.preventDefault();
    // console.log(this.id);
    cocktailApp.userChoice = this.id;
    // console.log(userChoice);
    cocktailApp.getIngredient(cocktailApp.userChoice);
});

// first API call: filter API by type of alcohol selected (user choice) 
cocktailApp.getIngredient = (userInput) => {
    $.ajax({
        url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`,
        method: 'GET',
        dataType: 'json',
    }).then((res) => {
      //  display 3 cocktails containing the selected type of alcohol
        for (let i = 0; i <= 3; i++) {
            // console.log(res.drinks[i]);
            cocktailApp.firstDrink = res.drinks[i].idDrink;
            cocktailApp.secondApiCall(cocktailApp.firstDrink);
        } 
    })
}

// second API call: filter API by drink Id) 

cocktailApp.secondApiCall = (drinkId) => {
    $.ajax({
        url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
        method: 'GET',
        dataType: 'json',
    }).then((res) => {
        console.log(res);
        const drinkResults = res.drinks;
        cocktailApp.showResults(drinkResults);
    })
}
// iterate over anything that includes string ingredient
// make an array filled with those attributes
// for loop length, if null skip it, else add to the array
cocktailApp.showResults = (drinkObj) => {
    // console.log(drink);
    // add a remove
        console.log(drinkObj);
        $('.showHere').append(`
        <div>
            <h2>${drinkObj[0].strDrink}</h2>
        </div>
        <h3>What you will need:</h3>
        <ul>
            <li>
            ${drinkObj[0].strIngredient1}
            </li>
            <li>
            ${drinkObj[0].strIngredient2}
            </li>
            <li>
            ${drinkObj[0].strIngredient3}
            </li>
            <li>
            ${drinkObj[0].strIngredient4}
            </li>
        </ul>
        <div>
            <h3>This is how you'll make it:</h2>
            <p>${drinkObj[0].strInstructions}</p>
        </div>
        <div class="imageDrink">
            <img src=${drinkObj[0].strDrinkThumb} />
        </div>
        <div>
            <h3>Measurements?</h2>
            <p>Tailor it to your liking!</p> 
        </div>
    `);
}

$(function() {
})
// init function to start everything
cocktailApp.init = function(){
  cocktailApp.getIngredient();
  

}
// doc ready
$(function(){
  cocktailApp.init();
  
})











