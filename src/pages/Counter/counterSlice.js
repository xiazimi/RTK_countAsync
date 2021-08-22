import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const fetchNum = (num) => {
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve(num)
    }, 2000)
  })
}

export const increaseAsync = createAsyncThunk(
  'counter/increaseAsync', 
  async(num) => {
    const res = await fetchNum(num);
    console.log('res==',res);
    return res;
  }
)

export const counterSlicer = createSlice({
  name: 'counter',
  // initialState: {
  //   count: 0, 
  // },
  initialState: null,
  reducers: {
    increase: (state, {payload}) => {
      state.count += payload;
    },
    decrease: (state, {payload}) => {
      state.count -= payload;
    },
  },
  extraReducers(builder){
    builder.addCase(increaseAsync.fulfilled, (state, action) => {
      console.log(state, action);
      state.count += action.payload;
    })
  }
});

export default counterSlicer.reducer;

export const { increase, decrease } = counterSlicer.actions;