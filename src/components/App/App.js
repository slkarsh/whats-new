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

  render () {
    return (
      <div className='app'>
        <Menu />
        <NewsContainer local={this.state.local} current={this.state.current} />
      </div>
    );
  }
}

export default App;
