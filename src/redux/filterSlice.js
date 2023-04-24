const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterValue: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { filterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
