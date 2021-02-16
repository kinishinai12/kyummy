import React, { Component } from 'react'
import ControlledCarousel from './ControlledCarousel';
import CategoryComponent from './CategoryComponent';
import ProductDetailsComponent from './ProductDetailsComponent';
import KoreanFameComponent from './KoreanFameComponent';

class HomeComponent extends Component{
    
    // <Spinner animation="border" variant="danger" />
    render() {
        return (
            <>
                <ControlledCarousel/>
                <KoreanFameComponent/>
                <CategoryComponent/>
                <ProductDetailsComponent/>
            </>
        )
    }
}
export default HomeComponent