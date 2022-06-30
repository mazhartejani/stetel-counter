export const actions = {
  SET_JOKE: 'SET_JOKE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_JOKE:
      return {
        ...state,
        joke: action.payload
      };
    default:
      return state;
  }
};
