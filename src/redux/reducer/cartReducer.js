const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return ({
                cartProducts:[action.productData,...state.cartProducts]
            })
        case "REMOVE_CART":
            let indexOfRemovedItem = state.cartProducts.findIndex(product=>product._id===action.id)
            state.cartProducts.splice(indexOfRemovedItem,1)
            return({
                cartProducts:[...state.cartProducts]
            })
        case "DELETE_ALL":
            return({
                cartProducts:[]
            })
        default:
            return state
    }
}

export { cartReducer }