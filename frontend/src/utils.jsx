export const getError = (error) => {
  return error.response && data.response.items.message
    ? error.response.data.message
    : error.message;
};
