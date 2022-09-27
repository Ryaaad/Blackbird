import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import items from '../../data/data'
const initialState = {
Bagshop:false,
Added:{etat:false,Product: {
  id: 'Err',
  title: 'r',
  price: 0,
  mark: 'ccc',
  Promotion: 5,
  fav: false,
  img: ['string[]',''],
  amount: 0,
}},

};

const manSlice = createSlice({
  name: 'man',
  initialState:initialState,
  reducers:{
OpenClose:(state)=>{
  state.Bagshop=!state.Bagshop
},
AddOpen:(state , action: PayloadAction<string>)=>{
  state.Added.etat=true
 const Product=items.find((item) => item.id === action.payload);
  if(Product) state.Added.Product={...Product,amount:1}
},
AddClose:(state)=>{
state.Added.etat=false
}
  }
});


export const {OpenClose,AddOpen,AddClose} = manSlice.actions;
  export default manSlice.reducer