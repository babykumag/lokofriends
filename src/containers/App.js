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
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{return response.json();}).then(users =>{this.setState({lokofriends:users})});
    
  }

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value })
}

  render() {
    const { lokofriends , searchfield} = this.state;
    const filteredFriends = lokofriends.filter(friends =>{
      return friends.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    if (lokofriends.length === 0){
      return <h1>Loading...Please Wait...</h1>
    } else {

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
 
}

export default App;
