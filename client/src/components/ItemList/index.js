import React from 'react';

const ItemList = (props) => {
  // if (!items.length) {
  //   return <h3>No items Yet</h3>;
  // }

  return (
    <div>
      <h3>{"title"}</h3>
      {!props && <h2> No data to display </h2>}
      {/* {items &&
        items.map((item) => (
          <div key={item._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {item.itemAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this item on {item.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{item.itemText}</p>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default ItemList;
