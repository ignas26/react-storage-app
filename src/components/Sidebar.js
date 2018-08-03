import React from 'react';


const Sidebar = (props)=>{
  const cats=props.cats.map((cat, i)=>{
    return(
        <div onClick={()=>props.switchCat(i)}
            key={cat}>
          {cat}
        </div>
    )
  });


  return (
      <div className="sidebar">
        <div className="sidebar-ul">
          <div className="sidebar-li">
        {cats}
          </div>
        </div>
      </div>
  );
};
export default Sidebar
