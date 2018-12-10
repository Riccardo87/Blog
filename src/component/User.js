import React, { Component } from 'react';
import '../App.css';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => this.setState({
                user: json
            }))
    }

    render() {
        return (

            <>

                <div>
                    {this.state.user.id}
                </div>

                <div>
                    {this.state.user.name}
                </div>

                <div>
                    {this.state.user.username}
                </div>

                <div>
                    {this.state.user.phone}
                </div>

            </>

        );
    }
}

export default User




