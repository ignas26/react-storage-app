import React from 'react';

const AddItems = (props)=>{

  const items = props.items.map((item, i)=>{
    return (
        <li key={i}>
          {item.name}
    <span
        onClick={() => props.removeItem(item)}
        className="delete">X</span>
          {item.price}
  </li>
    )
  });


  return (
      <div>
        <h3>AddItems</h3>
        <h3>removeItems {items}</h3>


      </div>

  );
};
export default AddItems








