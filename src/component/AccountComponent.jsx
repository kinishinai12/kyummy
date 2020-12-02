import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import CardColumns from 'react-bootstrap/CardColumns'
// import pork from '../image/pork.jpg';
// import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/esm/Nav';
// import Image from 'react-bootstrap/Image'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import ProfileCardComponent from './ProfileCardComponent';
import PurchaseCardComponent from './PurchaseCardComponent';
import GCashComponent from './GCashComponent';
import AddAddressComponent from './AddAddressComponent';
import SetNewPasswordComponent from './SetNewPasswordComponent';

export default class AccountComponent extends Component {
    render() {
        return (
            <div className="container"  style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"2%"}}>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">My Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">My Purchase</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">GCASH</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Address</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fifth">New password</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            {/* <Sonnet /> */}
                            <ProfileCardComponent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            {/* <Sonnet /> */}
                            <PurchaseCardComponent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            {/* <Sonnet /> */}
                            <GCashComponent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            {/* <Sonnet /> */}
                            <AddAddressComponent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                            {/* <Sonnet /> */}
                            <SetNewPasswordComponent/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
