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
       searchTerm: [],
       filterBookType: false
    }
  }

  handleFIlterBooks = (filterBoolean) => {
    console.log(typeof filterBoolean);
    this.setState({
      filterBookType: filterBoolean
    }, this.getBookList)
  }

  handleSearchTerm= (userSearchTerm) => {
    userSearchTerm = userSearchTerm ? userSearchTerm : this.state.searchTerm;
    this.setState({
      searchTerm: userSearchTerm
    }, this.getBookList) 
  }

  composeQuery(searchTerm) {
    return searchTerm.split(' ').join('+');
  }

  composeURL(BASE_URL) {
    if (this.state.filterBookType === 'true') {
      return `${BASE_URL}?q=${this.composeQuery(this.state.searchTerm)}&filter=free-ebooks&key=AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ`
    } else {
      return `${BASE_URL}?q=${this.composeQuery(this.state.searchTerm)}&key=AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ`
    }
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
    console.log('this.state.books', this.state.books)
    console.log(this.state.searchTerm)
    console.log(this.state.filterBookType)
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
