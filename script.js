// listen to a click event- user choice- that will return a value. create a variable to store the result
// use the result to filter the user choice through all the types of alcohol 
//  display 3 cocktails containing the selected type of alcohol
// filter will display the results as an array- we will need to then choose ONLY the info that we want to gather (name, ingredients, instructions, img)
// print it on the HTML

// DOES THE LOGIC USED ABOVE MAKE ANY SENSE?

let userSelection = $('.button').attr('id');

$('document').ready(function(){
    $('.button').on('click', function(){
        
        console.log(userSelection);
        
    });
  });
  
    
const cocktailApp = {};

cocktailApp.key = '1';
cocktailApp.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
cocktailApp.getCategories = () => {
    $.ajax({
        url: cocktailApp.url,
        method: 'GET',
        dataType: 'json',
    }).then((res) => {
        // const firstDrink = res[0].strDrink;
        // console.log(res.drinks);
        // console.log(firstDrink);
        // console.log(res.drinks[0].strDrink);
        // anything that goes here will have access to the data from the wine search api
        cocktailApp.showResults(res.drinks);
    })
}
// why cant i do the below - aymen wants to ask this in help cue
// const drink = cocktailApp.getCategories()
// console.log(drink);
cocktailApp.showResults = (drink) => {
    // get the image url and other data
    // smush photos
    drink.forEach((drinkObj) => {
        console.log(drinkObj);
        $('.showHere').append(`
        <div>
            <h2>${drinkObj.strDrink}</h2>
        </div>
        <h3>What you will need:</h3>
        <ul>
            <li>
            ${drinkObj.strIngredient1}
            </li>
            <li>
            ${drinkObj.strIngredient2}
            </li>
            <li>
            ${drinkObj.strIngredient3}
            </li>
            <li>
            ${drinkObj.strIngredient4}
            </li>
        </ul>
        <div>
            <h3>This is how you'll make it:</h2>
            <p>${drinkObj.strInstructions}</p>
        </div>
        <div class="imageDrink">
        <img src=${drinkObj.strDrinkThumb} />
        </div>
        <div>
        <p>${drinkObj.strInstructions}</p>
        </div>
        <div>
        <h3>Measurements?</h2>
        <p>Tailor it to your liking!</p> 
        </div>
    `);
    })
// how do I list all the ingredients while skipping the nulls? do I use for in? for each?? length?  Right now I manually putting each ingreident but it also show nulls for drinks that dont have 4 ingrideints etc
}
$(function() {
    cocktailApp.getCategories();
})
