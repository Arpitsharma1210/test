const createResourceRoutes = (resource: string) => ({
  root: `/${resource}`,
  create: `/${resource}/create`,
  view: `/${resource}/view/:id`,
});

export const routes = {
  test: createResourceRoutes('test'),
  root: '/',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password/:token',
  dashboard: {root:'/dashboard'},
};

export default routes;
