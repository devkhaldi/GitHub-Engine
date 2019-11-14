import React, { Component } from 'react'

export class SearchUsers extends Component {

    state = {
        search : ''
    }

    handelForm = (e) => {
        this.setState({
            search : e.target.value
        })
    }

    searchUsers = (e) => {
        e.preventDefault()
        this.props.getUsersSearch(this.state.search);
    }
    render() {
        const {search} = this.state
        return (
            <form onSubmit={this.searchUsers}>
                <div className="row" className="form-group">
                    <input onChange={this.handelForm} value={search} id="search" type="text" className="form-control" placeholder="Search users ...." />
                </div>
                <button className="btn btn-primary btn-block">Search</button>
            </form>
        )
    }
}

export default SearchUsers