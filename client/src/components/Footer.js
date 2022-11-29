// import React, { useEffect, useState } from 'react';
// import RecipeList from './RecipeList';


// function Footer() {
// //Endpoints want: vegetarian, vegan, glutenFree, dairyFree, title, readyInMinutes, sourceUrl, image, instructions
// //set up to get 3 recipes
// //map over 3 recipes and render a new card for each

// //click button
// //make recipe API call
// //response has 3 recipes with need for above endpoints
// //render sorry something went wrong if no results, if response render a card for each index with endpoints from above

//     const [results, setResults] = useState([]);

//     const fetchRecipeData = () => {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '7c34d18f30mshdf21b9c426c42cbp14b48bjsn4fda0db20f0b',
//                 'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//             }
//         };
        
//         fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3', options)
//             .then(response => response.json())
//             // .then(response => console.log(response))
//             .then((response) => {
//                 console.log(response.recipes)
//                 setResults(response.recipes)
//             })
//             .catch(err => console.error(err));
//     }

//     useEffect(() => {
//         fetchRecipeData();
//     }, []);
//     console.log('results1', results);
//     return (
//         <footer className='footer'>
//             <div className='container'>
//                 <p>
//                     <strong>Don't know what to bring? Please check out these simple recipes!</strong>  {' '}
//                 </p>
//                 <hr />
//                 <div className="col-12 col-lg-3">
//                     <button className="btn btn-primary btn-block py-3" type="button" onClick={fetchRecipeData}>
//                      Get Recipes
//                     </button>
//                 </div>
//                 {!results && <h2>Sorry! No Recipes Yet!</h2>}
//                 <RecipeList results={results} />
//             </div>

//         </footer>
//     );
// }

// export default Footer;