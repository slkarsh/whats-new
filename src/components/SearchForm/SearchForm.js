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
        this.setState({input: event.target.value.toUpperCase()})
    }

    resetSearchBar = () => {
        this.setState({input: ''})
    }

  searchArticles = (e) => {
    e.preventDefault();
    this.props.searchArticles(this.state.input)
    this.resetSearchBar()
  }

  keyPressed = event => {
      if (event.key === 'Enter') {
          this.searchArticles(event);
      }
  }

    render() {
        return(
            <header>
            <input 
                type='text' 
                placeholder='Search articles'
                name='search'
                value={this.state.input}
                onChange={this.handleChange}
                onKeyPress={this.keyPressed}
            />
            <button onClick={event => this.searchArticles(event)}>Search</button>
        </header>
        )
        
    }
}

export default SearchForm;