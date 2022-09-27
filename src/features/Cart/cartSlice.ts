import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import items from '../../data/data'
import Categorie from '../../data/Categorie';

var x=0;
var y=x+4
const initialState = {
 Product:items,
  Categorie:Categorie.slice(x,y),
  Bag:[  {
    id: 'Err',
    title: 'r',
    price: 0,
    mark: 'ccc',
    Promotion: 5,
    fav: false,
    img: ['string[]',''],
    amount: 0,
  },],
  amount:0,
  total:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState:initialState,
  reducers:{
    moved:(state,action: PayloadAction<String>)=>{
   if(action.payload=='+'){







  x++;
  y++;
  if(x>4) x=0;
  if(y>4) y=0
let h=3
if(y!==4){
 for(let i=x;i<4;i++){
      state.Categorie[h]=Categorie[i]
      h--;
       }
       console.log('y:',y,"cat:",Categorie[4]);
       state.Categorie[h]=Categorie[y]}
  else{
    for(let i=x;i<3;i++){
      state.Categorie[h]=Categorie[i]
      h--;
       }
       state.Categorie[h]=Categorie[y]
  }     
 
  
   }
   else{
    x++;
    y++;
    if(x>4) x=0;
    if(y>4) y=0
  let h=0
   
    
    if(y>x){
      for(let i=x;i<5;i++){
        state.Categorie[h]=Categorie[i]
        h++;
         }
    }else  state.Categorie=Categorie.slice(y,x)
   
   }
    },
    Fav:(state,action: PayloadAction<String>)=>{
      const item = state.Product.find((item) => item.id === action.payload);
  if(item) {item.fav= !item.fav}
    },
    Addproduct:(state,action: PayloadAction<String>)=>{
      state.amount++
      const item = state.Product.find((item) => item.id === action.payload);
      const bag = state.Bag.find((bag) => bag.id === item?.id);
      if(bag) {bag.amount++; }
      
      else{ if(item) { item.amount=1; state.Bag.push(item)}}
  
    },
    reduceproduct:(state,action: PayloadAction<String>)=>{
      state.amount--;
      const bag = state.Bag.find((bag) => bag.id === action.payload);
      if(bag) {bag.amount--; }
      if(bag?.amount===0){state.Bag = state.Bag.filter((bag) => bag.id !== action.payload);}
    },
    deleteproduct:(state,action: PayloadAction<String>)=>{
      
      // const item = items.find((bag) => bag.id === action.payload);
      // if(item) {  item.amount=0;  }

      const Bag = state.Bag.find((bag) => bag.id === action.payload);
      if(Bag) {
       
        state.amount=state.amount-Bag.amount
            Bag.amount=0; 
            state.Bag = state.Bag.filter((bag) => bag.id !== action.payload);
        state.total-=Bag.price* Bag.amount
        
       }
 

      
        
    },
    calcTotal:(state)=>{
      let total:number
      let amount:number
      total=0
      amount=0
      state.Bag.map(item=>{ 
        let Newprice=item.price-(item.price * item.Promotion)/100
        amount+=item.amount
        total+=item.amount * Newprice
      })
   state.total=total

     },
    }
});


export const { moved,Fav,Addproduct,deleteproduct,reduceproduct,calcTotal } = cartSlice.actions;
  export default cartSlice.reducer

