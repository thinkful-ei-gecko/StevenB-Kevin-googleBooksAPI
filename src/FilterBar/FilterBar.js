import React, { Component } from 'react';
import './FilterBar.css';

export default class FilterBar extends Component {
  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterBookType(e.target.value)}>
          <option value="paid-ebooks">Filter...</option>
          <option value="free-ebooks">FREE EBOOK</option>
        </select>
      </div>
    )
  }
}
