import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class AddAddressComponent extends Component {
    render() {
        return (
            <div>
                <Card>
                        <Card.Header as="h3">Address</Card.Header>
                        <Card.Body>
                            <Card.Title>Your Address</Card.Title>
                            <Card.Text>
                            
                                Full Name: Junie Delos Reyes<br/><br/>
                                
                                Default: Pickup<br/><br/>
                                
                                Phone: (+63) 9354679565<br/><br/>
                                
                                Address: 594, camia street
                                San Nicolas, Bulacan
                                North Luzon, Bulacan 3017<br/><br/>
                                

                                (para kapani-paniwala)
                            </Card.Text>
                            <Button variant="dark">Add Address</Button>
                        </Card.Body>
                </Card>
            </div>
        )
    }
}
