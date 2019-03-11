import React, { Component } from 'react'
import { getUser } from '../../Services/UsersServices'


export default class UserProfilePage extends Component {

    constructor(props) {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount() {

    }

    render() {
        const { id, username, email, phone, website } = this.state.user
        return (
            <div>
                <h4>{id}</h4>
                <h4>{username}</h4>
                <h4>{email}</h4>
                <h4>{phone}</h4>
                <h4>{website}</h4>
            </div>
        )
    }

    componentDidMount() {
        const { id } = this.props.match.params
        getUser(id).then((response) => {
            debugger
            this.setState({ user: response.data })
        })
    }

}