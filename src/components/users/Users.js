import React, { Component } from 'react'
import Axios from 'axios'
import User from './User'
import SearchUsers from './SearchUsers'

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [ ]
        }
    }

    getUsers = () => {
        Axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({
                    users : response.data
                })
            })
    }

    getUsersFromGit = (data) => {
        if (data != '') {
            Axios.get('https://api.github.com/search/users?q=' + data)
                .then(response => {
                    this.setState({
                        users : response.data.items
                    })
                })
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 my-2">
                        <SearchUsers getUsersSearch={this.getUsersFromGit}/>
                    </div>
                    {this.state.users.map(user => (
                        <div className="user col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-2" key={user.id}>
                            <User userdata={user} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Users
