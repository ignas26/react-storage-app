import React from 'react';

class AddItems extends React.Component{
  state={
    temp: {name:'', price:'', category:this.props.cats[0]}
  };

  handleInput = (value, type) => {

    if(type==='price') value = parseFloat(value);
    this.setState({temp: {...this.state.temp, [type]: value}})
  };




  handleSelect = (value) => {
    const laikinas = {...this.state.temp};
    laikinas.category = value;


    this.setState({temp: laikinas})
  };




  render(){

  const items = this.props.items.map((item, i)=>{
    return (
        <div key={i}>
          Item: {item.name}
          <span>
          Price: {item.price}</span>
    <span
        onClick={() => this.props.removeItem(item)}
        className="delete">X</span>
  </div>
    )
  });

    const options = this.props.cats.map((cat, i)=>{
    return(
     <option
       value = {cat}
       key={i}>
       {cat}
       </option>
    )
    });

    const itemsai = this.props.items.map((item, i)=>{
      return item.id
    });

    const bendras = itemsai === options;

  return (
      <div>
        <div className="categories">
          <div className="input">

            <select
            defaultValue={this.props.cats[0]}
            onChange={(e)=>this.handleSelect(e.target.value)}
            >
              {bendras}
            </select>

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








