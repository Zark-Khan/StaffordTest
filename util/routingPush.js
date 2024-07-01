export const pushRouter = (route) => {
  setTimeout(() => {
    route();
  }, 1000);
};
