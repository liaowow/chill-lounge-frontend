export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_BOARDS':
        return payload;
      default:
        return state;
    }
  };
