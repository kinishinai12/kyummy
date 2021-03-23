import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class ProfileNavbarComponent extends Component {
    render() {
        return (
            
                <>
                    <Navbar.Text variant="light">
                    {sessionStorage.getItem('username')}
                    </Navbar.Text>
                </>
        )
    }
}
