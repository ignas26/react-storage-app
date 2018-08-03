import React from 'react';


const Header = (props)=>{

  const tabs = props.tabs.map(tab=>{
    return (
        <div className="tabs" onClick={()=>props.switchTab(tab)}
            key={tab}>
          {tab}
        </div>
    )
  });

  return(
      <header>
        <h2>storage</h2>
          <div>
          {tabs}
          </div>
      </header>
  )
};



              export default Header



