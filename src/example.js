import React from 'react';
import ReactDom from 'react-dom';

class ShoppingList extends React.Component{

render() {
  return (
    <div className="shopping-list">
      <h1>hello {this.props.name}</h1>
          <ul>
              <li>instagram</li>
              <li>Facebook</li>
              <li>Linkedin</li>
          </ul>
    </div>
  )
}

}

ReactDom.render(
    <div>
<ShoppingList name="ravi"/>
<ShoppingList name="Surendra"/>
</div>
,document.getElementById('root')
);