import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import FacebookLoginComponent from './FacebookLoginComponent'

class SignUpComponent extends Component {
    render() {
        return (
            <Container style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"5%"}}>
                <Card border="dark" style={{'backgroundColor': "#e96196",
                        'backgroundImage': "linear-gradient(315deg, #e96196 0%, #ffffff 90%)", 'padding':"5%"}} >
                <Card.Header as="h5">Sign Up</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone-#</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
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

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>male</option>
                            <option>female</option>
                        </Form.Control>
                        </Form.Group>

                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I agree to Kyummy's, Terms of Use and Privacy Policy" />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Sign Up
                    </Button>

                    <div className="text-center">
                    <Card.Title as="h6"  className="text-center">Or</Card.Title>
                    <FacebookLoginComponent/>
                    </div>
                    
                </Form>
                </Card.Body>
                </Card> 
            </Container>
        )
    }
}

export default SignUpComponent
