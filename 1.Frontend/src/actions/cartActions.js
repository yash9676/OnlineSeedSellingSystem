export const addToCartAction = (product) => {
    return {
        type: "add-to-cart",
        payload: product
    };
};

export const removeFromCartAction = (product) => {
    return {
        type: "remove-from-cart",
        payload: product
    };
};