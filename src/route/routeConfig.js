import App from '../components/layout';
import Login from '../components/login';
import Center from '../components/login';
import dynamic from 'dva/dynamic'

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
  },
  {
    path: '/usercenter',
    name:"usercenter",
    key:"usercenter",
    component: Center,
    

  }
];
export default routes;
