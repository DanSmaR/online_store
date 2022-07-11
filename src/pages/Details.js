import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Avaliation from '../components/Avaliation';

export default class Details extends React.Component {
  render() {
    const {
      cartItemsQuantity,
      onAddToCart,
      listItems,
      rate,
      message,
      email,
      onInputChange,
      onSubmit,
      onSaveAvaliation,
      avaliations,
      match: { params: { id } } } = this.props;
    const element = listItems.find((item) => item.id === id) || [];
    const { title, thumbnail, price } = element;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => onAddToCart(id) }
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <span data-testid="shopping-cart-size">
          { cartItemsQuantity }
        </span>
        <div>
          <Avaliation
            email={ email }
            rate={ rate }
            message={ message }
            onInputChange={ onInputChange }
            onSubmit={ onSubmit }
            onSaveAvaliation={ onSaveAvaliation }
            avaliations={ avaliations }
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  rate: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cartItemsQuantity: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onSaveAvaliation: PropTypes.func.isRequired,
  avaliations: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
