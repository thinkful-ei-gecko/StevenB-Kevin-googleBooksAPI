import React from 'react';
import Header from './Header';
import List from './List';

/* API Key: AIzaSyDDWElUEuq7wjg6crMFUYzphoMMB0ZEIlQ */
// API documentation
/* https://developers.google.com/books/docs/v1/using#PerformingSearch */

export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Header />
        <List />
      </main>
    )
  }
}
