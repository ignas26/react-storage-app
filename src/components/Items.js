import React from 'react';

const Items = (props)=>{


  const items = props.items.map((item, i)=>{
  let itemInfo = [item.name, item.price];
    return (
        <li key={i}>
          {item.category === props.activeCat ? itemInfo : null}
        </li>
    )
  });

  return (
      <div className="items">
        <h3>
        {props.activeCat}
        </h3>

        <h4 className="list">{items}</h4>
        </div>

  );
};
export default Items





