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
      current: local
    }
  }

  changeCurrent = (event) => {
      event.preventDefault();
      this.setState({ current: this.state[event.target.id]
    })
  }

  checkId = (event) => {
    console.log('id', event.target.id)
  }

  render () {
    return (
      <div className='app'>
        <SearchForm />
        <Menu getId={this.checkId} changeCurrent={this.changeCurrent}/>
        <NewsContainer current={this.state.current} />
      </div>
    );
  }
}

export default App;
