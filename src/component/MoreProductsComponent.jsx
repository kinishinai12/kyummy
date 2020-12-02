import React, { Component } from 'react'
import pork from '../image/pork.jpg';
import {
  PContainer,
  PWrapper,
  PHeading,
  PTitle,
  PCard,
  PImg,
  PInfo,
  PDesc,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import Pagination from 'react-bootstrap/Pagination'

export default class MoreProductsComponent extends Component {
    state={
        product: [
            {
                id:1,
                img: pork,
                alt: 'korean Product',
                name: 'beef',
                desc:'putangina',
                price: 'PHP 200',
                button: 'Add to Cart'
              },
              {
                id:2,
                img: pork,
                alt: 'korean Product',
                name: 'beef',
                desc:'putangina',
                price: 'PHP 200',
                button: 'Add to Cart'
              },
              {
                id:3,
                img: pork,
                alt: 'korean Product',
                name: 'beef',
                desc:'putangina',
                price: 'PHP 200',
                button: 'Add to Cart'
              },
              {
                id: 4,
                img: pork,
                alt: 'korean Product',
                name: 'beef',
                desc:'putangina',
                price: 'PHP 200',
                button: 'Add to Cart'
              },
              {
                id: 5,
                img: pork,
                alt: 'korean Product',
                name: 'beef',
                desc:'putangina',
                price: 'PHP 200',
                button: 'Add to Cart'
              }
        ]
    }
    render() {
        return (
            <PContainer>
            <PHeading>Products From korea</PHeading>
            <PWrapper>
              {
              this.state.product.map(
                  products => 
                
                  <PCard key={products.id}>
                    <PImg src={products.img} alt={products.alt} />
                    <PInfo>
                      <PTitle>{products.name}</PTitle>
                      <PDesc>{products.desc}</PDesc>
                      <PPrice>{products.price}</PPrice>
                      <PButton>{products.button}</PButton>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
            <PInfo>
            
            
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </PInfo>
          </PContainer>
        )
    }
}


{/* <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination> */}
