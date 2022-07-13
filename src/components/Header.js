import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { cartItemsQuantity } = this.props;
    return (
      <div>
        <div>
          <Link to="/"><span>Home</span></Link>
        </div>
        <div>
          <h1>Front-end Online Store</h1>
        </div>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <span>Carrinho</span>
            <br />
            <span data-testid="shopping-cart-size">
              { cartItemsQuantity }
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  cartItemsQuantity: PropTypes.number.isRequired,
};

export default Header;
