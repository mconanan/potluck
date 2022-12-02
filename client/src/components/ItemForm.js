import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../utils/mutations';

import Auth from '../utils/auth';

const ItemForm = ({ potluckId }) => {

  // const initialValues = {
  //   itemName: "", 
  //   itemDescription: "",
  // }
//   const [itemName, setItemName] = useState('');
//   const [itemDescription, setItemDescription] = useState('');

  // const [values, setValues] = useState(initialValues);

  const [formState, setFormState] = useState({
    itemName: '',
    itemDescription: '',
  })

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: { potluckId, ...formState, username: Auth.getProfile().data.username },
      });
  setFormState('');
    //   setItemName('');
    //   setItemDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
        ...formState,
        [name]: value,
      });
  };

  return (
    <div>
      <h4>What delicious dish are you bringing?</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="itemName"
                placeholder="What are you bringing to the table?"
                value={formState.itemName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="itemDescription"
                placeholder="Please describe the dish. Does it accommodate any food diet requests?"
                value={formState.itemDescription}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Item
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add items. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ItemForm;
