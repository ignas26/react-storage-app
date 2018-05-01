import React from 'react';
import AddItems from './components/AddItems';
import Categories from './components/Categories';
import Header from './components/Header';
import Items from './components/Items';
import Sidebar from './components/Sidebar';
import Statistics from './components/Statistics';

class App extends React.Component {
  state={
    tabs:['Items', 'AddItems', 'Categories', 'Statistics'],
    activeTab:'Items',
    categories: ['keyboards', 'monitors', 'laptops', 'hardDrives'],
    items:[

        {name: 'logitech', price: 100 , category:'keyboards'},
        {name: 'logitech turbo', price: 200, category:'keyboards'},
        {name: 'logitech ultra', price: 300, category:'keyboards'},

        {name: 'asus', price: 100, category:'monitors'},
        {name: 'samsung', price: 200, category:'monitors'},
        {name: 'lg', price: 300, category:'monitors'},

        {name: 'toshiba', price: 500, category:'laptops'},
        {name: 'dell', price: 600, category:'laptops'},
        {name: 'mac', price: 700, category:'laptops'},

        {name: 'wd', price: 150, category:'hardDrives'},
        {name: 'panasonic', price: 250, category:'hardDrives'},
        {name: 'acme', price: 350, category:'hardDrives'}

    ],
    activeCat: 'Keyboards'
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
      case 'Items' : return <Items activeCat={this.state.activeCat} items={this.state.items}/>;
      case 'AddItems' : return <AddItems activeCat={this.state.activeCat} removeItem={this.removeItem} items={this.state.items} addItem={this.addItem} cats={this.state.categories}/>;
      case 'Categories' : return <Categories addCategory={this.addCategory}/>;
      case 'Statistics' : return <Statistics/>;
      default : return null
    }
  };

  // renderContent2 = ()=>{
  //
  //   switch (this.state.activeCat){
  //     case 'keyboards' : return <Keyboards items={this.state.keyboards}/>;
  //     case 'monitors' : return (this.state.monitors);
  //     case 'laptops' : return (this.state.laptops);
  //     case 'hardDrives' : return (this.state.hardDrives);
  //     default : return null
  //     }
  //   };


  render() {
    return (
        <div>
          <Header switchTab={this.switchTab} tabs={this.state.tabs}/>
          <Sidebar switchCat={this.switchCat} cats={this.state.categories}/>
          {this.renderContent()}
        </div>
    )
  }
}

export default App;
