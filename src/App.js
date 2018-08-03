import React from 'react';
import AddItems from './components/AddItems';
import Header from './components/Header';
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import Statistics from './components/Statistics';

class App extends React.Component {
  state={
    tabs:['Landing', 'AddItems', 'Statistics'],
    activeTab:0,
    categories: ['keyboards', 'monitors', 'laptops', 'hardDrives'],
    items:[

        {name: 'logitech', price: 100 , id:0},
        {name: 'logitech turbo', price: 200, id:0},
        {name: 'logitech ultra', price: 300, id:0},

        {name: 'asus', price: 100, id:1},
        {name: 'samsung', price: 200, id:1},
        {name: 'lg', price: 300, id:1},

        {name: 'toshiba', price: 500, id:2},
        {name: 'dell', price: 600, id:2},
        {name: 'mac', price: 700, id:2},

        {name: 'wd', price: 150, id:3},
        {name: 'panasonic', price: 250, id:3},
        {name: 'acme', price: 350, id:3}
    ],
    activeCat:0,
  };

  switchTab = activeTab=>this.setState({activeTab});

  switchCat = activeCat=>this.setState({activeCat});

  removeItem = (id) => {
    const items = this.state.items.filter(item => item.name !== id.name);
    this.setState({items})
  };

  addItem= (newItem) => {
    const items = [...this.state.items, newItem];
    this.setState({items})
  };

  addCategory= (newCat) => {
    const categories = [...this.state.categories, newCat];
    this.setState({categories})
  };

  renderContent = ()=>{
    switch (this.state.activeTab){
      case 'Landing' : return <Landing cats={this.state.categories} items={this.state.items} activeCat={this.state.activeCat}/>;
      case 'AddItems' : return <AddItems activeCat={this.state.activeCat} removeItem={this.removeItem} items={this.state.items} addItem={this.addItem} cats={this.state.categories}/>;
      case 'Statistics' : return <Statistics/>;
      default : return null
      }
  };

  render() {
    return (
        <div>
          <Header switchTab={this.switchTab} tabs={this.state.tabs}/>
          <div className='routes-parent'>
          <Sidebar switchCat={this.switchCat} cats={this.state.categories}/>
          <div className="render-parent">{this.renderContent()}</div>
          </div>
        </div>
    )
  }
}

export default App;
