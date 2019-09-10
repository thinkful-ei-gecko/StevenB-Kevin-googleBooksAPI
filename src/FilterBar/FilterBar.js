import React, { Component } from 'react';
import './FilterBar.css';

export default class FilterBar extends Component {
  render() {
    return (
      <div>
        <select onClick={(e) => this.props.filterBookType(e.target.value)}>
          <option value={false}>Filter...</option>
          <option value={true}>FREE</option>
        </select>
      </div>
    )
  }
}
