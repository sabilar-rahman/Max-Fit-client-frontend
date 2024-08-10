import { TCartInitialState } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // setToCart: (state, action) => {
    //   const existingProduct = state.items.find(
    //     (item) => item._id == action.payload._id
    //   );
    //   if (existingProduct) {
    //     if (existingProduct.quantity < action.payload.stock) {
    //       existingProduct.quantity += 1;
    //     } else {
    //       state.items.push({ ...action.payload, quantity: 1 });
    //     }
    //   }
    // },
    // add to cart

    // setToCart: (state, action) => {
    //  state.items.push({
    //   ...action.payload
    //  })
    // },

    // update cart
    // updateCartQuantity: (
    //   state,
    //   action: PayloadAction<{ id: string; quantity: number }>
    // ) => {
    //   const isItemExists = state.items.find(
    //     (item) => item._id === action.payload.id
    //   );

    //   if (isItemExists) {
    //     isItemExists.quantity = action.payload.quantity;
    //   }
    // },

    // //   remove cart
    // removeFromCart: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((item) => item._id !== action.payload);
    // },

    // // all clear
    // clearCart: (state) => {
    //   state.items = [];

    // },

    setToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.quantity < action.payload.stock) {
          existingProduct.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const isItemExists = state.items.find(
        (item) => item._id === action.payload.id
      );

      if (isItemExists) {
        isItemExists.quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
