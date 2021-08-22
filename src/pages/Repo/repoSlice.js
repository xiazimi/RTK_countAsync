import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getRepos = (key) => {
  return fetch(`https://api.github.com/search/repositories?q=${key}&sort=stars`).then(res => res.json())
}

export const fetchRepoAsync = createAsyncThunk(
  'repo/getRepo',
  async (key) => {
    console.log('repoName==', key);
    const res = await getRepos(key);
    return res.items;
  }
) 

export const repoSlice = createSlice({
  name: 'repo',
  // initialState: {
  //   mostStarRepo: {}
  // },
  initialState: null,
  extraReducers: (builder) => {
    builder.addCase(fetchRepoAsync.fulfilled, (state, {payload}) => {
      console.log('res===111', payload);
      state.mostStarRepo = payload[0];
    })
  }
});

export default repoSlice.reducer;