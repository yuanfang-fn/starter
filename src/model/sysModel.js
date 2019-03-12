import * as service from '../service/api'
import { routerRedux } from 'dva/router';

export default {

    namespace: 'global',

    state: {
        userInfo: []
    },

    subscriptions: {
       
    },

    effects: {
        * fetch({payload}, {call, put}) {  // eslint-disable-line
            const loginData = yield call(service.login,payload);
            if (loginData.status === 'ok') {
              yield put(routerRedux.push('/'))
            }
        },
    },

    reducers: {
        save(state, {payload: {data}}) {
            state.list = data.list;
            return {...state}
        },
    },

};
