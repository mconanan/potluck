import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
// import CommentForm from '../components/CommentForm';
// import CommentList from '../components/CommentList';

// Import the query we are going to execute from its file
import { QUERY_SINGLE_POTLUCK } from '../utils/queries';

const SinglePotluck = () => {

  const { potluckId } = useParams();
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_SINGLE_POTLUCK, {
    // pass URL parameter
    variables: { potluckId: potluckId },
  });

  // Use optional chaining to check if data exists and if it has a items property. If not, return an empty array to use.
  const potluck = data?.potluck || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        Welcome to the {potluck.potluckName} Party! Please add the Dish you are bringing!
      </h3>
      
      <div className="my-5">
        <ItemList items={potluck.items} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ItemForm potluckId={potluck._id} />
      </div>
      {/* <div className="my-5">
        <CommentList comments={potluck.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm potluckId={potluck._id} />
      </div> */}
    </div>
  );
};

export default SinglePotluck;
