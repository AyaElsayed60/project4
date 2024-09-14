import create from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product, quantity) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, totalPrice: (item.quantity + quantity) * item.price }
            : item
        )
      };
    }
    return {
      cartItems: [...state.cartItems, { ...product, quantity, totalPrice: quantity * product.price }]
    };
  }),
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  }))
}));