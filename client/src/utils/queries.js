import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';

// Import the query we are going to execute from its file
// import { QUERY_ITEMS } from './queries'; test comment

const Home = () => {
  // Execute the query on component load
  const { loading, data } = useQuery();

  // Use optional chaining to check if data exists and if it has a items property. If not, return an empty array to use.
  const items = data?.items || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ItemList
              items={items}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
