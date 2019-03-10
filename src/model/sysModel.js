import * as service from '../service/api'

export default {

    namespace: 'global',

    state: {
        list: []
    },

    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'fetch'})
        },
    },

    effects: {
      

        * fetch({payload}, {call, put}) {  // eslint-disable-line
            const loginData = yield call(service.login);
            let data= {data:{list:[1,2]}}
          yield put({type: 'save', payload: data});
        },
      
    },

    reducers: {
        save(state, {payload: {data}}) {
            
            state.list = data.list;
            return {...state}
        },
    },

};
