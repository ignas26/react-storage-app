import React from 'react';

class AddItems extends React.Component{
  state={
    temp: {name:'', price:''}
  };

  handleInput = (value, type) => {

    if(type==='price') value = parseFloat(value);
    this.setState({temp: {...this.state.temp, [type]: value}})
  };

  handleCat = (value) =>{
  if(this.handleInput) this.setState({temp: {...this.state.temp, value}})
  };

  render(){

  const items = this.props.items.map((item, i)=>{
    return (
        <li key={i}>
          Item: {item.name}
          <span>
          Price: {item.price}</span>
    <span
        onClick={() => this.props.removeItem(item)}
        className="delete">X</span>
  </li>
    )
  });

const ItemToCat= this.props.cats.map((cat, i)=>{
  const filtered=this.props.items.filter((item)=>item.category === cat);
  return(
      <div
        key={i}
      onSelect={(i)=>{filtered(i)}}
      >
        <h4>aaa</h4>
      </div>
  )
});


  return (
      <div>
        <div className="categories">
          <div className="input">
            <select onClick={() => this.handleCat({ItemToCat}) } />
            <input
                onChange={(e) => this.handleInput(e.target.value, 'name')}
                value={this.state.temp.name}
                type="text" placeholder="pridekite pavadinima"/>
            <input
                onChange={(e) => this.handleInput(e.target.value, 'price')}
                value={this.state.temp.price}
                type="number" placeholder="pridekite kaina"/>
            <div
                onClick={()=>this.props.addItem(this.state.temp)}
                className="btn">Add items</div>
          </div>
        </div>

        <h3>removeItems {items}</h3>
      </div>
  )}
}

export default AddItems








