import React, { Component } from 'react'
import pork from '../image/pork.jpg';
import Image from 'react-bootstrap/Image'

export default class ProfileNavbarComponent extends Component {
    render() {
        return (
            
                <>
                    <Image rounded
                        width={30}
                        height={30}
                        alt="hell yeah!"
                        src={pork}
                    />
                </>
        )
    }
}
