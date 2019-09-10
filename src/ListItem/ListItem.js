import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
  render() {
    const theBook = this.props.volumeInfo;
    const title = theBook.title ? theBook.title : 'No Title';
    const authors = theBook.authors ?
      (theBook.authors.length > 1 ? theBook.authors.map(author => author + ', ') : theBook.authors[0]) :
      'No Authors';
    const price = this.props.saleInfo.retailPrice ? this.props.saleInfo.retailPrice.amount : 'NOT FOR SALE';
    const description = theBook.description ? theBook.description : 'No Description';
    const thumbnail = theBook.imageLinks ? theBook.imageLinks.thumbnail : 'https://via.placeholder.com/150';
    const website = theBook.infoLink ? theBook.infoLink : '#';

    return (

      <li className="ListItem">
        <a href={website}>
          <h2>{title}</h2>
          <img src={thumbnail} alt="Thumbnail"></img>
        </a>
        <p>{authors}</p>
        <p>{price}</p>
        <p>{description}</p>
      </li >
    )
  }
}
