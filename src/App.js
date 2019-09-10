import React, { Component } from 'react';
import Header from './Header/Header';
import List from './List/List';
import './App.css';

/* API Key: AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ */
// API documentation
/* https://developers.google.com/books/docs/v1/using#PerformingSearch */

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       books: [],
       searchTerm: 'harry potter',
       filterBookType: null,
    }
  }

  composeQuery(searchTerm) {
    return searchTerm.split(' ').join('+');
  }

  composeURL(BASE_URL) {
    return `${BASE_URL}?q=${this.composeQuery(this.state.searchTerm)}&key=AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ`
  }

  componentDidMount() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    const options = {
      method: 'GET',
    };

    fetch(this.composeURL(BASE_URL), options)
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data.items,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    console.log('this.state.books', this.state.books)
    return (
      <main className='App'>
        <Header
          searchTerm={this.state.searchTerm}
          filterBookType={this.state.filterBookType}/>
        <List books={this.state.books} />
      </main>
    )
  }
}
