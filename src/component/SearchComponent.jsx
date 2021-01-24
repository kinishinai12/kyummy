import React,{ Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa';
import Popover from 'react-bootstrap/Popover';
import WelcomePageService from '../springboot api/WelcomePageService';
import Media from 'react-bootstrap/Media'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Spinner from 'react-bootstrap/Spinner'
import { FaRegKissWinkHeart } from 'react-icons/fa'
import { Link, withRouter } from 'react-router-dom'

class SearchComponent extends Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            query:'',
            results: [],
            placement: 'bottom-start',
            target: null,
            isLoading: true,
            isErrorOccur: false,
            error:'',
            // show:false
            
        }
      }

    getInfo=()=>{
        var pageNumber = 0;
        WelcomePageService.executeSearchProduct(this.state.query, pageNumber)
        .then( response => 
            { 
                this.setState({
                results: response.data.content, isLoading:false
            })})
        .catch(error => this.handleError(error))
        

    }
    handleInputChange=(e)=>{
        this.setState({target: e.target});
        this.setState({
            [e.target.name]:e.target.value
        },() => {
            if(this.state.query && this.state.query.length > 1){
                if(this.state.query.length % 2 === 0){
                    this.getInfo()
                    console.log(this.state.results)
                }
            }
        })

        
    }
    searhedClicked=()=>{
        this.setState({query:''});
    //    this.props.history.push(`/details/${id}`)
     }

    handleError=(response)=>{
        console.log(response)
        this.setState({isLoading:false, isErrorOccur:true, error:"Network Error"})
    }
    renderSuggestion (){
        return(
            <Popover id="popover-contained" placement={this.state.placement} >
            <ListGroup variant = "flush">
            {this.state.isLoading&&
            <ListGroup.Item>
                <Spinner as="span" size="sm" animation="grow" variant="danger"/>
                Loading...Please wait<FaRegKissWinkHeart/>
                </ListGroup.Item>}
                {this.state.isErrorOccur&&
            <ListGroup.Item>
                {this.state.error}<FaRegKissWinkHeart/>
                </ListGroup.Item>}

                {!this.state.isErrorOccur && 
                    this.state.results.map(
                        suggestion=>
            <ListGroup.Item as={Link} to={`/details/${suggestion.id}`} onClick={this.searhedClicked} key={suggestion.id}>
              <Media>
                <img
                    width={44}
                    height={44}
                    className="mr-3"
                    src={suggestion.img}
                    alt="pic"
                    onClick={this.searhedClicked}
                />
                <Media.Body>
                    {suggestion.productName}
                </Media.Body>
                </Media>
              </ListGroup.Item>
              )
            }
          {/* to={`/details/${suggestion.id}`} */}
          </ListGroup>
          </Popover>
        );
    }

    render() {
        return (
            <div ref={this.myRef}>
                <InputGroup>
                <OverlayTrigger
                trigger= 'focus'
                arrowProps
                ref={this.myRef.current}
                target={this.state.target}
                // show={this.state.show}
                // flip
                placement={this.state.placement}
                containerPadding={20}
                overlay={this.renderSuggestion ()}>
                    <FormControl
                    placeholder="Search"
                    name="query"
                    value = {this.state.query}
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={this.handleInputChange}
                    />
                    
                    </OverlayTrigger>
                        <InputGroup.Append>
                            <Button variant="outline-dark"><FaSearch/></Button>
                        </InputGroup.Append>
                </InputGroup>
                
                
            </div>
        )
    }
}

export default withRouter(SearchComponent)