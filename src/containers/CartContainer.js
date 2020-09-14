import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../action/index';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            // hiển thị các cart  
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        let {onDeleteProductInCart , onChangeMessage, onUpdateProductInCart} = this.props;
        let result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        // cart lấy từ trên store -> mapstatetoProps 
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

// prototype chuyển các state trên các store thành cái props của component này 
// sử dụng propstype để kiểm tra các kiểu dữ liệu cho products 
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired, 
    onDeleteProductInCart :PropTypes.func.isRequired,
    onChangeMessage :PropTypes.func.isRequired,
    onUpdateProductInCart :PropTypes.func.isRequired
}

// kết nối 

const mapStateToProps = state => {

    return {
        cart: state.cart
    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(CartContainer);
