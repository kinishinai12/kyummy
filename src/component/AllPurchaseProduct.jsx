import React, { Component } from 'react'
import Media from 'react-bootstrap/Media'
import pork from '../image/pork.jpg';

export default class AllPurchaseProduct extends Component {
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
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                        width={54}
                        height={54}
                        className="mr-3"
                        src={pork}
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                        width={54}
                        height={54}
                        className="mr-3"
                        src={pork}
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        </Media.Body>
                    </Media>
                </ul>
            </div>
        )
    }
}

