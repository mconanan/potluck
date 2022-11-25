import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POTLUCK } from "../utils/mutations";

import Auth from "../utils/auth";

const CreatePotluckForm = () => {
  const [formState, setFormState] = useState({
    potluckName: "",
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
            name="potluck"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />

          <button
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }


export default CreatePotluckForm;
