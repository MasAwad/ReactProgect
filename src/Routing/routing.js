import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import UsersPage from '../Pages/UsersPage/UsersPage'
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage'
import Header from '../Components/Header/Header'
export default class Routing extends Component {

    render() {
        return (

            <Router>
                <div>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/users/' component={UsersPage} />
                    <Route path='/profile/:id/' component={UserProfilePage} />
                </div>
            </Router>

        )
    }

}