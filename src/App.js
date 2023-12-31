import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
// import { lokofriends } from "./lokofriends";
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      lokofriends: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
        then(response=>{return response.json();}).
        then(users =>{this.setState({lokofriends:users})});
    
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
        <Scroll>
            <CardList lokofriends={filteredFriends}/>
        </Scroll>
      </div>
    );
  }
 
}

export default App;
