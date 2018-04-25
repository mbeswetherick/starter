import React, { Component } from 'react';
import article from './article';

class Article extends Component {
  render() {
    console.log('what is article ', article)
    return (
      <div>
        <h1>A Hedonistic Vegan's search for lunch in Midtown</h1>
        {article.map(piece =>  <p>{piece}</p>)}
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