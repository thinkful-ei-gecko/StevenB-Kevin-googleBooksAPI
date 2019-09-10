import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FilterBar />
      </div>
    )
  }
}
