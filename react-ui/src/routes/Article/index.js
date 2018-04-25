import React, { Component } from 'react';
import article from './article';
import GetSheetDone from 'get-sheet-done'

const DOCUMENT_ID = '19uOLKW3q8vlWQdmnEQWafg0UZP3VW67jWLpN0yCrltA';

class Article extends Component {
  state = {
    article: null,
  };

  componentDidMount() {
    GetSheetDone.labeledCols(DOCUMENT_ID).then(sheet => {
      console.log(sheet.data[0].article.split('\n'))
      this.setState({
        article: sheet.data[0].article.split('\n'),
        fetching: false
      });
    });
    fetch('/fetchArticle')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          fetching: false
        });
      }).catch(e => {
        this.setState({
          fetching: false
        });
      })
  }

  render() {
    console.log('what is article ', article)
    return (
      <div>
        <h1>A Hedonistic Vegan's search for lunch in Midtown</h1>
        {this.state.article && this.state.article.map(piece =>  <p>{piece}</p>)}
      </div>
    );
  }
}

// const Horse = () => {
//   console.log('what is article ', article)
//   return (
//     <div>
//       <h1>A hedonistic Vegan's search for lunch in Midtown</h1>
//       {article.map(piece =>  <p>{piece}</p>)}
//     </div>
//   );
// }

export default Article;