import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({input: [event.target.value.toUpperCase()]})
    }

    resetSearchBar = () => {
        this.setState({input: ''})
    }

  searchArticles = (e) => {
    e.preventDefault();
    this.props.searchArticles(this.state.input)
    this.resetSearchBar()
  }

    render() {
        return(
            <header>
            <input 
                type='text' 
                placeholder='Search here'
                name='search'
                value={this.state.input}
                onChange={this.handleChange}
            />
            <button onClick={event => this.searchArticles(event)}>Search here</button>
        </header>
        )
        
    }
}

export default SearchForm;