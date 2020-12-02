import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class GCashComponent extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header as="h1">Gcash</Card.Header>
                    <Card.Body>
                        <Card.Title>Your Gcash</Card.Title>
                        <Card.Text>
                        Ang programang ito ay rated spg
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Body className="align-center">
                        <Button variant="dark">Add</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
