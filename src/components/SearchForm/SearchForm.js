import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class SearchForm extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <header>
            <input 
                type='text' 
                placeholder='Search here'
                name='search'
            />
            <button>Search here</button>
        </header>
        )
        
    }
}

export default SearchForm;