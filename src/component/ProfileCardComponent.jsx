import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import pork from '../image/pork.jpg';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'

export default class ProfileCardComponent extends Component {
    render() {
        
        return (
            <div>
                {/* <Card > */}
                        
                {/* </Card> */}
                <CardGroup>
                <Card  style={{display: 'flex', flexDirection: 'row'}}>
                    
                    <Card.Body>
                    <Card.Title><Card.Img src={pork} style={{width:'10rem'}} /> </Card.Title>
                    <Card.Title><Button variant="dark" type="submit">
                        Select
                    </Button></Card.Title>
                    <Card.Title as="h5">My Profile</Card.Title>
                        <Card.Title>Manage n protect your account</Card.Title>
                        
                        <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>Phone-#</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="First Last" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" />
                        </Form.Group>

                    </Form.Row>

                    <Button variant="dark" type="submit">
                        Save
                    </Button>
                </Form>
                    </Card.Body>
                </Card>
                </CardGroup>
            </div>
        )
    }
}
//style={{display: 'flex', flexDirection: 'row'}}