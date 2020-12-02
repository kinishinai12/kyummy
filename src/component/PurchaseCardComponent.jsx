import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AllPurchaseProduct from './AllPurchaseProduct'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
// import CardGroup from 'react-bootstrap/CardGroup'
// import Media from 'react-bootstrap/Media'
// import pork from '../image/pork.jpg';
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import ProductDetailsComponent from './ProductDetailsComponent';

export default class PurchaseCardComponent extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="All">
                        {/* <Sonnet /> */}
                        <AllPurchaseProduct/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
                   
}



 /* <Card  style={{display: 'flex', flexDirection: 'row'}}>
                <Card.Body>
                <Card.Title>
                    <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">All</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Title>
                    <Card.Title>Purchase</Card.Title>
                    
                </Card.Body>
                </Card> */