import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Media from 'react-bootstrap/Media'
import { FaTrash } from 'react-icons/fa';

export default class CartModalComponent extends Component {

    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    <Media as="li">
                        <img
                        width={54}
                        height={54}
                        className="mr-3"
                        src={this.props.img}
                        alt="network error"
                        />
                        <Media.Body>
                        <h5>{this.props.productName}</h5>
                        <p>{this.props.quantity}</p>
                        <p>₱ {this.props.price}</p>
                        <Button variant="outline-danger" onClick={this.props.deleteCartItem}><FaTrash/></Button>
                        </Media.Body>
                    </Media>
                 </ul>
            </div>
        )
    }
}
