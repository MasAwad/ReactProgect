import React, { Component } from 'react'
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export default class UserRow extends Component {
    render() {
        const { id, username, email } = this.props.user
        return (
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td><Button color='success'>
                    <Link to={`/profile/${id}/`}>view profile</Link>
                </Button></td>
            </tr>
        )
    }
}
