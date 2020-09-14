import * as Types from './../constants/ActionType';


export const actAddToCart = (product, quantity) =>{
    return {
        type: Types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
}

export const actChangeMessage = (message)=>{
    return {
        type : Types.CHANG_MESSAGE,
        message : message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product: product
    }
}

export const actUpdateProductInCart = (product, quantity)=> {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product : product,
        quantity : quantity
    }
}