import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [this.props.users],
            followers: [this.props.followers]
        }
    }
    
    render() {
        const userArray = this.state.users;
        const followersArray = this.state.followers;
        // console.log(userArray)
        // console.log(followersArray)
        return (
            <div>
                <h2 className='headers'>Main User:</h2>
                <div className='userCard'>
                    {userArray.map(users => {
                        return (
                            <div key='mainId1'>
                                <h3>Username: {users.login}</h3>
                                <p>Account Type: {users.type}</p>
                                <p>Account URL: {users.html_url}</p>
                                <p>ID: {users.id}</p>
                            </div>
                        )
                    })}
                </div>
                <h2 className='headers'>Followers:</h2>
                <div className='userCard'>
                    {followersArray.map(followers => {
                        return (
                            <div key='mainId0'>
                                <h3>Username: {followers.login}</h3>
                                <p>Account Type: {followers.type}</p>
                                <p>Account URL: {followers.html_url}</p>
                                <p>ID: {followers.id}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
