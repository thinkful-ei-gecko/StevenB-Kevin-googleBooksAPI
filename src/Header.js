import React, { Component } from 'react'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

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
