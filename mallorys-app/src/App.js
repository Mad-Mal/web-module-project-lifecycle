import React, { Component } from 'react';
import UserCard from './components/UserCard';

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
      .then(data => {
        // console.log(data)
        this.setState({ users: data })
      })
      .catch(error => {
        console.log('Error with fetch', error)
      })
    // fetch(`https://api.github.com/users/Mad-Mal/followers`)
    //   .then(res => {
    //     console.log(res.data)
    //     this.setState({ followers: res.data })
    //   })
  };

  render() {
    return (
      <div>
        <UserCard users={this.state.users}/>
      </div>
    )
  }
}

