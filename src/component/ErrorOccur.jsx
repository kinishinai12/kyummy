import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'

class ErrorOccur extends Component{
    render() {
        return (
            <Container style={{'marginTop': "80px", 'marginBottom': "45px" }}>
                
                <h1 className="notFoundTitle"><Badge variant="warning">Oops!</Badge> Page can’t be found.</h1>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </Container>
        )
    }
}
export default ErrorOccur