import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [this.props.users]
        }
    }
    // console.log()
    render() {
        const userArray = this.state.users;
        console.log(userArray)
        return (
            <div>
                {userArray.map((users) => {
                    return (
                        <div>
                            <h2 key='id1'>{users.login}</h2>
                            <p key='id2'>Account Type: {users.type}</p>
                            <p key='id3'>Account URL: {users.html_url}</p>
                            <p key='id4'>ID: {users.id}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
