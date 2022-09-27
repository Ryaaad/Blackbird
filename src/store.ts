import cartReducer from './features/Cart/cartSlice';
import manReducer from './features/Manuelle/ManSlice'
import menuReducer from './features/Menu/menuSlice'
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    man:manReducer,
    menu:menuReducer
  },

});