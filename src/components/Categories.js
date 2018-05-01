import React from 'react';

class Categories extends React.Component {
state={
temp: {category:''}
};

  handleInput = (value) => {
    const temp = [...this.state.temp.category, value];
    this.setState({temp})
  };

  render() {
    return (
        <div className="categories">
          <div className="input">
            <input
                onChange={(e) => this.handleInput(e.target.value)}
                value={this.state.temp.category}
                type="number" placeholder="pridekite kategorija"/>
            <div
                onClick={()=>this.props.addCategory(this.state.temp)}
                className="btn">Add</div>
        </div>
        </div>
    );
  };
}

export default Categories










