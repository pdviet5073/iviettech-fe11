import React from 'react';
 
import './style.css';
import List from './List/List';
import Siderbar from './Siderbar';

function Main() {
   const dataList =[
     {
       color: "#fcba03",
       name: "lê văn a",
     },
     {
      color: "#84fc03",
      name: "lê văn a",
    },
    {
      color: "#03f4fc",
      name: "lê văn a",
    },
    {
      color: "#fc03b1",
      name: "lê văn a",
    }
   ]
  return (
    <div className = "main">
      <Siderbar></Siderbar>
      <List dataList={dataList}></List>
    </div>
  );
}

export default Main;
