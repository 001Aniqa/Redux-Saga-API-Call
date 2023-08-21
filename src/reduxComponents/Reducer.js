// reducer.js

const initialState = {
    data: null, error: null,
   
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { ...state, data: action.data, error: null };
      case 'FETCH_FAILURE':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default reducer;
  