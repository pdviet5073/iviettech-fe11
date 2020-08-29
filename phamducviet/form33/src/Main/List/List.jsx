import React, { useState } from "react";
import SignUp from "./SignUp";
import "./style.css";

function List(props) {
 
 
  return (
    <div className=" list container ">
     
     <div>
     <div >
        <h2>Form</h2>
        <SignUp  ></SignUp>
      </div>
     </div>
    </div>
  );
}

export default List;
