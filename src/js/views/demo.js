import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import NewContact from "../component/addContact.jsx";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-4">
      <NewContact />
      <Link to="/">
        <button className="btn btn-primary col-12 mt-2">Back home</button>
      </Link>
    </div>
  );
};
