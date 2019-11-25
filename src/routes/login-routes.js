import SignInSide from '../views/Login/Login';

const loginRoutes = [
  {
    path: '/login',
    component: SignInSide,
    layout: '/auth'
  }
];

export default loginRoutes;
