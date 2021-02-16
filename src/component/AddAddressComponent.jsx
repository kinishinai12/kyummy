import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


export default class AddAddressComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
               
                <Jumbotron key={this.props.id}>
                    <h5>Your Address</h5>
                        <p>
                        {this.props.detailedaddress} {this.props.barangay}, {this.props.city} {this.props.region}, {this.props.province} {this.props.postalcode}.
                        </p>

                    <p>
                        <Button variant="outline-success">Update</Button>
                    </p> 
                    <p>
                        <Button variant="outline-danger">Delete</Button>
                    </p>
                </Jumbotron>
              
            </div>
        )
    }
}


{/* <Card key={this.props.id}>
<Card.Header as="h3">Address</Card.Header>
<Card.Body>
    <Card.Title>Your Address:</Card.Title>
    <Card.Text>
        {this.props.detailedaddress} {this.props.barangay}, {this.props.city} {this.props.region}, {this.props.province} {this.props.postalcode} 
    </Card.Text>
    <Button variant="dark">Add Address</Button>
</Card.Body>
</Card> */}