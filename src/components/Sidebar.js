import React from 'react';


const Sidebar = (props)=>{
  const cats=props.cats.map((cat)=>{
    return(
        <li onClick={()=>props.switchCat(cat)}
            key={cat}>
          {cat}
        </li>
    )
  });

  return (
      <div className="sidebar">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
        {cats}
          </li>
        </ul>
      </div>
  );
};
export default Sidebar
