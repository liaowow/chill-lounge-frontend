export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        console.log(payload)
        return payload;
      case 'LOG_OUT':
        return {};
      default:
        return state;
    }
  };