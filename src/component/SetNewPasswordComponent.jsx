import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default class SetNewPasswordComponent extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Set New Password</Card.Header>
                    <Card.Body>
                        <Card.Title>PassWord</Card.Title>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Old password</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Re-enter new Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Verification Code"
                            aria-label="Verification Code"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-dark">Verify Code</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Button variant="dark">Save</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
