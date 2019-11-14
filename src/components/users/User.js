import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class User extends Component {
    render() {
        const { avatar_url, login, repos_url } = this.props.userdata;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="row">
                            <Link to={'users/'+login} className="btn btn-success btn-sm mr-1">Show</Link>
                            <Link href={repos_url} className="btn btn-warning btn-sm">Repositories</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User