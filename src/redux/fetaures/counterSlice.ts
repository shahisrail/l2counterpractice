import { createSlice } from '@reduxjs/toolkit'

// const states = {count : 0}

const counterslice = createSlice({
  name :"counter",
  initialState :{
    count : 0,
    boxsize :[],
  },
  
  
 reducers:{
    increment :(state)=>{
      state.count = state.count + 1
        
    },
    decrement : (state)=>{
        state.count = Math.max(0,state.count -1)
    },
    incrementbyvalue:(state,action)=>{
        state.count = state.count + action.payload
    },
    decrementbyvalue:(state,action)=>{
        state.count = Math.max(0,state.count - action.payload)
    }
  }   
})
export const {increment ,decrement,incrementbyvalue,decrementbyvalue} = counterslice.actions
export default counterslice.reducer

