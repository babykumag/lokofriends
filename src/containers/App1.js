import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { lokofriends } from "./lokofriends";
import './App.css';




class App extends Component {
  
  constructor(){
    super()
    this.state = {
      lokofriends: lokofriends,
      searchfield: ''
    }
  }

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value })
  

}


  render() {
    const filteredFriends = this.state.lokofriends.filter(lokofriends =>{
      return lokofriends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className="tc">
        <h1 className='f1'>LOKOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList lokofriends={filteredFriends}/>
      </div>
    );
  }
  
 
}






//ORIGINAL
// const App = () => {
//   return(
//     <div className="tc">
//       <h1>LOKO Friends</h1>
//       <SearchBox />
//       <CardList lokofriends={lokofriends}/>
//     </div>
//   );
// }


export default App;
