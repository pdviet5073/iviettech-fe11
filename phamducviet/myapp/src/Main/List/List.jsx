import React from 'react';

import './style.css';
import Item from './Item';

function List(props) {
 const {dataList} = props;
console.log(dataList);
  return (
    <div className = " list ">
        <h2>List Item</h2>
   
      <div className='row'>
      <Item tem  color={dataList[0].color} name={dataList[0].name} active></Item> 
        <Item  color={dataList[1].color} name={dataList[1].name}></Item> 
        <Item  color={dataList[2].color} name={dataList[2].name}></Item> 
        <Item  color={dataList[3].color} name={dataList[3].name}></Item> 
      </div>
    

    
    </div>
  );
}

export default List;
