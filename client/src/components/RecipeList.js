import React from 'react';

function RecipeList(props) {
    console.log('props1', props.results);
    return (
        <div className='container text-center'>
            <div className='row'>
            {props.results.map((result, index) => (
                <div className='card col m-2 p-1 ' key={index}>
                    <div className='card-header'>
                        <h4>{`${result.title}`}</h4>
                    </div>
                    <img src={result.image} alt={result.summary}/>
                    <a href={result.sourceUrl} target='_blank' rel='noreferrer'>
                      {`Get ${result.title} Recipe Here`}  
                    </a>
                </div>
            ))}
            </div>
        </div>
    );
}

export default RecipeList;