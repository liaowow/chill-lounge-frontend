export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return payload;
      case 'LOG_OUT':
        return {};
      default:
        return state;
    }
  };