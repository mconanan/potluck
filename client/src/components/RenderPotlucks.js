import React from 'react';
import { Link } from 'react-router-dom';

function RenderPotlucks(props) {
    console.log('props1', props.results);
    return (
        <div className='container text-center'>
            <div className='row'>
            {props?.potlucks?.map((potluck) => (
                <div className='card col m-2 p-1 ' key={potluck._id}>

                    <Link to={`/potluck/${potluck._id}`} >
                      {`${potluck.potluckName}`}  
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
}

export default RenderPotlucks;