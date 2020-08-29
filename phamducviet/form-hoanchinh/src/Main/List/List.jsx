import React, { useState } from "react";
import SignUp from "./SignUp";

import "./style.css";

function List(props) {


  return (
    <div className=" list  ">

      <div className=" list-group">
        <div className="list-item">
          <div className="list-item-heading"> </div>
          <div className="list-item-body">
            <h2>Form</h2>
            <SignUp ></SignUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
