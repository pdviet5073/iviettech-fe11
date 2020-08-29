import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Group from "./Group"
import "./style.css";

function List(props) {
 
 
  return (
    <div className=" list  ">
      
      <div>
        <button className="btn btn-primary">tab 1</button>
        <button className="btn btn-primary">tab 2</button>
      </div>

     {/* <div>
     <div >
        <h2>Form</h2>
        <SignUp  ></SignUp>
      </div>
     </div> */}
    </div>
  );
}

export default List;
