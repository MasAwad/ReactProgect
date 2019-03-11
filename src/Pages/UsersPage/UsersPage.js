import React, { Component } from 'react'
import { getUsersFromBackEnd } from '../../Services/UsersServices'
import { Table } from 'reactstrap';
import UserRow from "../../Components/UserRow/UserRow";
export default class UsersPage extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <h3>Users Page</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>username</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((value, index) => {
                            return (<UserRow user={value} />)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }

    componentDidMount() {
        getUsersFromBackEnd().then((response) => {
            this.setState({ users: response.data })
        })
    }

}