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
       searchTerm: '',
       filterBookType: 'paid-ebooks'
    }
  }

  handleFIlterBooks = (filterBy) => {
    this.setState({
      filterBookType: filterBy
    }, this.getBookList)
  }

  handleSearchTerm= (userSearchTerm) => {
    this.setState({
      searchTerm: userSearchTerm
    }, this.getBookList) 
  }

  composeQuery(searchTerm) {
    return searchTerm.split(' ').join('+');
  }

  composeURL(BASE_URL) {
    return `${BASE_URL}?q=${this.composeQuery(this.state.searchTerm)}&filter=${this.state.filterBookType}&key=AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ`;
  }

  getBookList() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    const options = {
      method: 'GET',
    };

    fetch(this.composeURL(BASE_URL), options)
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          books: data.items,
        })
      })
      .catch(error => {
        alert(error);
      })
  }
  
  render() {
    return (
      <main className='App'>
        <Header
          handleSearchTerm={this.handleSearchTerm}
          filterBookType={this.handleFIlterBooks}
          />
        <List books={this.state.books} />
      </main>
    )
  }
}
