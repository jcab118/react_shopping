
import React, {Component} from 'react';

export default class App extends Component {
//const App = React.createClass({
  getItems() {
    // some request here
    return [{id: 1, name: "Book", price: 12.49},
            {id: 2, name: "Table", price: 33.29},
            {id: 3, name: "Bookmark", price: 0.49}];
  }
  // getInitialState() {
  //   return {
  //     items: this.getItems(),
  //     cart: []
  //   }
  // }
  constructor(props) {
      super(props);
      this.state = {
        items: this.getItems(),
        cart: []
      };
  }
  addToCart(item) {
    var found = false;
    var updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name == item.name) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    
    if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }
    
    this.setState({
      cart: updatedCart
    });
  }
  render(){
    return (
      <div>
        <nav>
          <h3>Products</h3>
          <Cart cart={this.state.cart} />
        </nav>
          <div className="Products">  
            {this.state.items.map((item) => {
              return <Product details={item} addToCart={this.addToCart} />
            })}
          </div>
      </div>
    );
  }
};

class Cart extends Component {
// const Cart = React.createClass({
  // getInitialState() {
  //   return {
  //     open: false
  //   }
  // }
  constructor(props) {
      super(props);
      this.state = {
        open: false
      };
  }
  openCart() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
        <p className="Title">Cart</p>
        <div>
        {this.props.cart.length > 0 ? this.props.cart.map((item) => {
          return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
        </div>
      </div>
    );
  }
};

class Product extends Component {
//const Product = React.createClass({
  addToCart() {
    this.props.addToCart(this.props.details);
  }
  render() {
    let item = this.props.details;
    return (
      <div className="Product" onClick={this.addToCart}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  }
};

