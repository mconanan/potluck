import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POTLUCK } from "../utils/mutations";

import Auth from "../utils/auth";


const CreatePotluckForm = (props) => {


  const [formState, setFormState] = useState({
    potluckName: "", potluckAddress: "", potluckDate: "",
  });
  const [addPotluck, { error, data }] = useMutation(ADD_POTLUCK);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addPotluck({
        variables: { ...formState },
      });

      Auth.login(data.addPotluck.token);
    } catch (e) {
      console.error(e);
    }

    

  };

    return (
      <div className="create-potluck-form">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Name of Potluck"
            name="potluckName"
            type="text"
            value={formState.potluckName}
            onChange={handleChange}
          />
          <br/>
    <input
            className="form-input"
            placeholder="Date of Potluck"
            name="potluckDate"
            type="text"
            value={formState.potluckDate}
            onChange={handleChange}
          />
          <br/>
          <input
            className="form-input"
            placeholder="Address of Potluck"
            name="potluckAddress"
            type="text"
            value={formState.potluckAddress}
            onChange={handleChange}
          />
          <br/>
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      
        {/* /* //  added to display potlucks if user is logged in
  // const isLoggedIn = props.user.login;
  // (isLoggedIn) ? {
  //   user.potlucks.length > 0 ? <div>user.potlucks</div
  // } :  <p>"No potlucks yet"</p> */}
    
         
      </div>
    );
  }


export default CreatePotluckForm;
