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
        // event.preventDefault()
        this.setState({input: [event.target.value.toUpperCase()]})
        console.log('state', this.state.input)
        // console.log('state upper', this.state.input.toUpperCase())
        // this.props.searchArticles(this.state.input);
        // this.resetSearchBar();
    }

    resetSearchBar = () => {
        this.setState({input: ''})
    }

    //need to grab the value from the input
    //update state with that value
    //on click event, search through App's current articles state 

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