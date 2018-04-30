              import React from 'react';


const Header = (props)=>{

  const tabs = props.tabs.map(tab=>{
    return (
        <li onClick={()=>props.switchTab(tab)}
            key={tab}>
          {tab}
        </li>
    )
  });

  return(
      <header>
        <h2>storage</h2>
        <ul>
          <li>
          {tabs}
          </li>
        </ul>
      </header>
  )
};



              export default Header



