import { Component } from 'react';
import React from "react";
import Item from "./style.for.categorycomponent/Item";
import '../componentCSS/component.css'
import CustomPagin from './style.for.categorycomponent/CustomPagin'
import Button from './style.for.categorycomponent/Button'
import Flex from './style.for.categorycomponent/Flex'
import Carousel, { consts } from 'react-elastic-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { withRouter } from 'react-router-dom';
import WelcomePageService from '../springboot api/WelcomePageService';
import Spinner from 'react-bootstrap/Spinner'



class CategoryComponent extends Component{
    state ={
      category: [],
      isLoading:true,
      isErrorOccur: false,
      error:'',
    }

    handleError=(response)=>{
      console.log(response)
      this.setState({isLoading:false, isErrorOccur: true, error:"Network Error/ Can't load the data"})
    }

    componentDidMount(){
      this.refresh();
    }

    refresh =() =>{
      WelcomePageService.executeGetAllCategoryService()
      .then(
        response => {
          this.setState({category: response.data, isLoading:false})
        }
      ).catch(error => this.handleError(error))
    }

    myArrow({ type, onClick, isEdge }) {
      const pointer = type === consts.PREV ? <FaChevronLeft/> : <FaChevronRight/>
      return (
        <Button onClick={onClick} disabled={isEdge}>
          {pointer}
        </Button>
      )
    }

    render() {
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

      return (
        <div className="container" style={{'marginTop':"30px"}}>
          {!this.state.isErrorOccur && <div style={{'textAlign': "center"}}><h1>Categories</h1></div>}
          <Carousel breakPoints={breakPoints}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <Flex direction="row">
                  {pages.map(page => {
                    const isActivePage = activePage === page
                    return (
                      <CustomPagin
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                      />
                    )
                  })}
                </Flex>
              )
            }}
            renderArrow={this.myArrow}
            > 
            {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>}
            {this.state.isErrorOccur && <div>{this.state.error}</div>}
              {!this.state.isErrorOccur &&
                this.state.category.map(
                  categories => 
                  <Item key={categories.id} onClick={()=>this.itemClicked(categories.categoryName)}>
                    {categories.categoryName}
                  </Item>
                )
              }
              
            
            
          </Carousel>
        </div>
      );
    }


    itemClicked=(categoryName)=>{
      console.log(categoryName)
      this.props.history.push(`/products/${categoryName}`)
    }
  }
export default withRouter(CategoryComponent)