import React from 'react';
 

function Item(props) {
    const {name, color}  = props;
   
   const colorStyle ={
     backgroundColor: color,
    height: 100,
    width: "100%",
    
     
   };
  
  return (
    <div className='col-md-2 '>
      <div className="item">
        <div style={colorStyle}></div>
      <div   className='p-2'>{name}</div>
    </div>
    </div>
  );
}

export default Item;
