import React, { Component } from 'react';
import UserCard from './components/UserCard';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      followers: []
    }
  };

  componentDidMount(){
    fetch('https://api.github.com/users/Mad-Mal')
      .then(res => res.json())
      .then(res => {
        this.setState({ 
          ...this.state,
          users: res })
      })
      .catch(error => {
        console.log('Error with fetch', error)
      })
    fetch(`https://api.github.com/users/Mad-Mal/followers`)
    .then(res => res.json())
      .then(res => {
        this.setState({ 
          ...this.state,
          followers: res })
      })
      .catch(error => {
        console.log('Error with second fetch', error)
      })
  };

  render() {
    return (
      <div className='mainContainer'>
        <UserCard users={this.state.users} followers={this.state.followers} />
      </div>
    )
  }
}

