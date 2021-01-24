import React, { Component } from 'react'
import WelcomePageService from '../springboot api/WelcomePageService';
import Pagination from 'react-bootstrap/Pagination'
import {
  PContainer,
  PWrapper,
  PHeading,
  PTitle,
  PCard,
  PImg,
  PInfo,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner'

export default class ProductByCategoryComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            product: [],
            categoryName: this.props.match.params.categoryName,
            currentPage: 1,
            count: 0,
            isLoading:true,
        };
    }

    componentDidMount(){
        this.retrieveProducts() 
      }
  
      retrieveProducts=()=>{
        let page = this.state.currentPage - 1;
        let productPerPage = 10;
        WelcomePageService.executeGetProductByCategories(this.state.categoryName, page, productPerPage)
        .then(
          response => {
            this.setState({
              product: response.data.content,
              count: response.data.totalPages,
              isLoading:false
            })
          }
        )
      }

      pageChange=(value)=>{
        this.setState({
          currentPage: value
        },
        () => {
          this.retrieveProducts();
        }
        );
      }


    render() {
        let items = [];
        for (let number = 1; number <= this.state.count; number++) {
          items.push(
            <Pagination.Item key={number} active={number===this.state.currentPage} onClick={()=>this.pageChange(number)}>
              {number}
            </Pagination.Item>,
          );
        }
 
        return (
          
            <PContainer>
              
            <PHeading>{this.state.categoryName}</PHeading>
            <PWrapper>
            {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>} 
              {
              this.state.product.map(
                  products => 
                
                  <PCard key={products.id}>
                    <PImg src={products.img} alt={products.id} />
                    <PInfo>
                      <PTitle>{products.productName}</PTitle>
                      <PPrice>₱ {products.price}</PPrice>
                      <PButton>Add to cart</PButton>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
           <Container>

            <Pagination >
              {items}
            </Pagination>
            </Container>
          </PContainer>
        )
    }
    }

