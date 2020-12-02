import React, { Component } from 'react'
import Media from 'react-bootstrap/Media'
import pork from '../image/pork.jpg';

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
                        src={pork}
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>Pork</h5>
                        <p>
                            tama na wag ka ng maglagay pa sa cart masyado ka ng magastos, pede 
                            ba tumigil ka na .. hays bahala ka nga dyan.
                        </p>
                        </Media.Body>
                    </Media>
                 </ul>
            </div>
        )
    }
}
