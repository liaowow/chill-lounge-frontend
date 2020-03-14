export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_RESULTS':
        return payload;
      default:
        return state;
    }
  };