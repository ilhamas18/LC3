const initialState = {
  profiles: []
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'getProfiles':
      return {...state, profiles: action.payload}
    default:
      return state;
  }
}

export default reducer;