const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add-to-cart':
      return [...state, action.product]

    case 'remove-from-cart':
      return state.filter((p) => p.id !== action.product.id)
      
    default:
      return state
  }
}

export default cartReducer
