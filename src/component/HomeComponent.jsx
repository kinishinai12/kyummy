import React, { Component } from 'react'
import ControlledCarousel from './ControlledCarousel';
import CategoryComponent from './CategoryComponent';
import ProductDetailsComponent from './ProductDetailsComponent';
import KoreanFameComponent from './KoreanFameComponent';

class HomeComponent extends Component{
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