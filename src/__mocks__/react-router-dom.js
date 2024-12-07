export const RouterProvider = ({ children }) => <div>{children}</div>;
export const createMemoryRouter = (routes, options) => ({
  routes,
  options,
});