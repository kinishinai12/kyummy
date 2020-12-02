import { Component } from 'react';
//import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa';

class SearchComponent extends Component{
    render() {
        return (
            <div>
                <InputGroup>
                    <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    />
                        <InputGroup.Append>
                            <Button variant="outline-dark"><FaSearch/></Button>
                        </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

export default SearchComponent