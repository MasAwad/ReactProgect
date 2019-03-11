import React, { Component } from 'react'
import { Button, Navbar } from 'reactstrap'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Button color='primary'><Link to='/'>Home</Link></Button>
                    <Button color='success'><Link to='/users/'>users</Link></Button>
                </Navbar>
            </div>
        )
    }
}
