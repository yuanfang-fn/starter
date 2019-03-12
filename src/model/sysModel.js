import * as service from '../service/api'
import { routerRedux } from 'dva/router';

export default {

    namespace: 'global',

    state: {
        userInfo: []
    },

    subscriptions: {
        setup({dispatch}) {
        },
    },

    effects: {
        * fetch({payload}, {call, put}) {  // eslint-disable-line
            const loginData = yield call(service.login,payload);
            console.log(loginData);
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
