import App from '../components/layout';
import Login from '../components/login';

const routes = [
  {
    path: '/',
    name:"index",
    key:'index',
    exact: true,
    component: App,
  },
  {
    path: '/login',
    name:"login",
    key:"login",
    component: Login,
  }
];
export default routes;
