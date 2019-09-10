import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Find a book!</h1>
        <div>
          <SearchBar handleSearchTerm={this.props.handleSearchTerm}/>
          <FilterBar filterBookType={this.props.filterBookType}/>
        </div>
      </div>
    )
  }
}
