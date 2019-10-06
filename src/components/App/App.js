import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
// import NewsArticle from '../NewsArticle/NewsArticle';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science, 
      technology,
      current: local,
      displayed: local
    }
  }

  changeCurrent = (event) => {
      // event.preventDefault();
      this.setState({ current: this.state[event.target.id], displayed: this.state[event.target.id]
    })
  }

  searchArticles = (searchInput) => {
    let searchResult = this.state.current.filter(article => {
      return article.headline.toUpperCase().includes(searchInput)
    })
    this.setState({ displayed: searchResult})
    return searchResult
  }

  render () {
    return (
      <div className='app'>
        <SearchForm searchArticles={this.searchArticles} />
        <Menu changeCurrent={this.changeCurrent}/>
        <NewsContainer displayed={this.state.displayed} />
      </div>
    );
  }
}

export default App;
