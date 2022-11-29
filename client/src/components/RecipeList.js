import React from 'react';

function RecipeList(props) {
    console.log('props1', props.results);
    return (
        <div className='container'>
            {props.results.map((result, index) => (
                <div className='card' key={index}>
                    <div className='card-header'>
                        <h2>{`${result.title}`}</h2>
                    </div>
                    <img src={result.image} alt={result.summary}/>
                    <a href={result.sourceUrl} target='_blank' rel='noreferrer'>
                      {`Get ${result.title} Recipe Here`}  
                    </a>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;