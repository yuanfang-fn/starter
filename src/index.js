import dva from 'dva';
import createHistory from 'history/createHashHistory';
import AppRouter from './route'
import * as serviceWorker from './serviceWorker';




const app = dva({
    history: createHistory(),
  });

  app.model(require('./model/sysModel.js').default);

  // 4. Router
  app.router(AppRouter);
  
  // 5. Start
  app.start('#root');


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
