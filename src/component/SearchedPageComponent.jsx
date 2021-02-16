import React, { Component } from 'react'
// import pork from '../image/pork.jpg';
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
  // PDesc,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import Container from 'react-bootstrap/esm/Container';
// import ScrollToTop from './ScrollToTop';
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from 'react-router-dom';

class SearchedPageComponent extends Component {
    constructor(props){
        super(props);
    
        this.state={
          product: [],
           currentPage: 1,
           count: 0,
           isLoading:true,
           totalElements:0,
      };
    
      }
    
        componentDidMount(){
          this.retrieveProducts()
        }
    
        retrieveProducts=()=>{
          let pageNumber = this.state.currentPage - 1;
          WelcomePageService.executeSearchProduct(this.props.match.params.productName, pageNumber)
          .then(
            response => {
              this.setState({
                product: response.data.content,
                count: response.data.totalPages,
                isLoading:false,
                totalElements:response.data.totalElements,
              })
            }
          )
        }

        componentDidUpdate(prevProps, prevState) {
              if (prevProps.match.params.productName !== this.props.match.params.productName) {
                console.log(prevProps);
                console.log(prevState);
                console.log("componentDidUpdate");
                this.retrieveProducts(); 
              }
              else{ 
                console.log("componentDidUpdate but no changes occured");
              }
          }

          productImageClicked=(productId)=>{
            this.props.history.push(`/details/${productId}`);
          }

    //TODO: catch in axios
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
                  
                <PHeading>Searched Result: {this.state.totalElements} Found</PHeading>
                <PWrapper>
                {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>} 
                  {
                  this.state.product.map(
                      products => 
                    
                      <PCard key={products.id}>
                        <PImg src={products.img} alt={products.id} onClick={()=>this.productImageClicked(products.id)}/>
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

export default withRouter(SearchedPageComponent);
