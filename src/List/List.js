import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

export default class List extends Component {
  render() {
    const listItems = this.props.books
      .map((book, index) => <ListItem {...book} key={index}/>);

    return (
      <ul className="List">
        {listItems}
      </ul>
    )
  }
}
