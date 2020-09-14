import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage }from './../action/index';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        let result = null;
        let {onAddToCart, onChangMessage} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} 
                    onAddToCart = {onAddToCart}
                    onChangMessage = {onChangMessage}
                />
            });
        }
        return result;
    }

}

// prototype chuyển các state trên các store thành cái props của component này 
// sử dụng propstype để kiểm tra các kiểu dữ liệu cho products 
ProductsContainer.propTypes  = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        
        products: state.products
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart: (product)=>{
            dispatch(actAddToCart(product, 1))
        },
        onChangMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
