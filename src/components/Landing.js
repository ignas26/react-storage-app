import React from 'react';

const Landing = (props)=>{


  const items = props.items.map((item, i)=>{
  let itemInfo = [item.name, item.price];
    return (
        <div key={i}>
          {props.activeCat === item.id ? itemInfo : null}
        </div>
    )
  });

  return (
      <div className="items">
        {/*<h3>*/}
        {/*{props.activeCat}*/}
        {/*</h3>*/}
        <h4>{items}</h4>
        {/*<h4>{cats}</h4>*/}
        </div>

  );
};
export default Landing