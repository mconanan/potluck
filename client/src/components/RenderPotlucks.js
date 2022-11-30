import React from 'react';

function RenderPotlucks(props) {
    console.log('props1', props.results);
    return (
        <div className='container text-center'>
            <div className='row'>
            {props?.potlucks?.map((potluck) => (
                <div className='card col m-2 p-1 ' key={potluck._id}>

                    <a href={`/potluck/${potluck._id}`} target='_blank' rel='noreferrer'>
                      {`${potluck.potluckName}`}  
                    </a>
                </div>
            ))}
            </div>
        </div>
    );
}

export default RenderPotlucks;