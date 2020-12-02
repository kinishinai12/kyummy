import React, { Component } from 'react'
import ControlledCarousel from './ControlledCarousel';
import CategoryComponent from './CategoryComponent';
import ProductDetailsComponent from './ProductDetailsComponent';

class HomeComponent extends Component{
    render() {
        return (
            <>
                <ControlledCarousel/>
                <CategoryComponent/>
                <ProductDetailsComponent/> 
            </>
        )
    }
}
export default HomeComponent