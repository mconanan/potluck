import React, {useEffect, useState} from "react";
import RecipeList from './RecipeList';


function Home() {

  const [results, setResults] = useState([]);

  const fetchRecipeData = () => {
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '7c34d18f30mshdf21b9c426c42cbp14b48bjsn4fda0db20f0b',
              'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
          }
      };
      
      fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3', options)
          .then(response => response.json())
          // .then(response => console.log(response))
          .then((response) => {
              console.log(response.recipes)
              setResults(response.recipes)
          })
          .catch(err => console.error(err));
  }

  useEffect(() => {
      fetchRecipeData();
  }, []);
  console.log('results1', results);
  return (
    <div>
      <hr />
      <div className="row">
        <div className="column">
          <img
            src="./Assets/pexels-lina-kivaka-1813505.jpg"
            alt="Spread of food"
          />
        </div>
        <div className="column">
          <img
            src="./Assets/pexels-kaboompics-com-5929.jpg"
            alt="Spread of food"
          />
        </div>
        <div className="column">
          <img src="./Assets/pexels-flo-dahm-.jpg" alt="Spread of food" />
        </div>
      </div>
      <div className="section">
        <div className="text">
          <div className="div1 text">
            Welcome to our Potluck App where you can create a potluck and share
            with friends and family. Let the fiesta begin!{" "}
          </div>
        </div>
      </div>
      <div className='container'>
                <p>
                    <strong>Don't know what to bring? Please check out these simple recipes!</strong>  {' '}
                </p>
                <hr />
                <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" type="button" onClick={()=>fetchRecipeData()}>
                     Get Recipes
                    </button>
                </div>
                {!results && <h2>Sorry! No Recipes Yet!</h2>}
                <RecipeList results={results} />
      </div>
    </div>
  );
}

export default Home;
