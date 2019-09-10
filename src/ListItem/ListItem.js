import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
  render() {
    const theBook = this.props.volumeInfo;
    const title = theBook.title;
    const authors = theBook.authors.length > 1 ? theBook.authors.map(author => author + ', ') : theBook.authors[0];
    const retailPrice = this.props.saleInfo.retailPrice;
    const price = retailPrice ? retailPrice.amount : 'NOT FOR SALE';
    const description = theBook.description;
    const thumbnail = theBook.imageLinks.smallThumbnail;

    return (
      <li className="ListItem">
        <h2>{title}</h2>
        <img src={thumbnail} alt="Thumbnail"></img>
        <p>{authors}</p>
        <p>{price}</p>
        <p>{description}</p>
      </li>
    )
  }
}
