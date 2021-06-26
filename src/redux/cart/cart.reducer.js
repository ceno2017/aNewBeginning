import cart_Hidden from "./cart.types";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
      case cart_Hidden.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: ! state.hidden
        }
        default:
          return state;
    }
}

export default cartReducer;