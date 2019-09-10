import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchTerm(e.target.searchBox.value)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='searchBox'>Search for a book: </label>
        <input type='text' 
               action='submit'
               placeholder='book'
               name='searchBox' 
               id='searchBox'
               />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
