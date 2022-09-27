

import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

const initialState = {
    Menu:false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState:initialState,
  reducers:{
Click:(state)=>{
  state.Menu=!state.Menu
},
  }
});


export const {Click} = menuSlice.actions;
  export default menuSlice.reducer
