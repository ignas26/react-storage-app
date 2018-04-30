import React from 'react';

class Categories extends React.Component {
state={
temp: {name:'', price:''}
};



  render() {
    return (
        <div className="categories">
          <div className="input">
        <input
    onChange={(e) => this.handleInput(e.target.value)}
    value={this.addCategory}
    type="text" placeholder="pridekite kategorija"/>
        </div>
        </div>
    );
  };
}

export default Categories










