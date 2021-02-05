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
  PButton,
} from './productstyled/ProductComponents';
import Container from 'react-bootstrap/esm/Container';
// import ScrollToTop from './ScrollToTop';
import Spinner from 'react-bootstrap/Spinner'


export default class MoreProductsComponent extends Component {
  constructor(props){
    super(props);

    this.state={
      product: [],

       currentPage: 1,
       count: 0,
       productPerPage: 10,
       isLoading:true,
  };

  }

  productImageClicked=(id)=>{
    console.log(id)
    if(this.state.isLoading===false){
      console.log("tumatagos");
      this.props.history.push(`/details/${id}`)
    }
    else{
      console.log("wait");
    }
  }

    componentDidMount(){
      this.retrieveProducts()
    }

    retrieveProducts=()=>{
      let page = this.state.currentPage - 1;
      let productPerPage = 21;
      WelcomePageService.executeGetAllProduct(page, productPerPage)
      .then(
        response => {
          this.setState({
            product: response.data.content,
            count: response.data.totalPages,
            isLoading:false,
          })
        }
      )
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
              
            <PHeading>Kyummy's Products</PHeading>
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

