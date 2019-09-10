import React, { Component } from 'react';
import './FilterBar.css';

export default class FilterBar extends Component {
  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterBookType(e.target.value)}>
          <option value={false}>Filter...</option>
          <option value={true}>FREE EBOOK</option>
        </select>
      </div>
    )
  }
}
