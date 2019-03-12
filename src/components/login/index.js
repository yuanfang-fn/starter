import React from 'react'
import { connect } from 'dva';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.username=""
        this.password=""
     }
     onLogin = ()=>{
       if (this.props.loading) {
         return
       }
       console.log('login');
      this.props.dispatch({
        type: 'global/fetch',
        payload: {username:this.username,password:this.password},
      })
     }
    render() {
      const { loading } = this.props
        return (
        <div>
          <h1>{loading?'LOLLLL':'^_^'}</h1>
          <p>
            <label htmlFor="name"></label>
            <input id="name" onChange={(e)=>{this.username=e.target.value}} name="name" type="text"/>
          </p>
          <p>
            <label htmlFor="pass"></label>
            <input id="pass" name="pass" onChange={(e)=>{this.password=e.target.value}}  type="text"/>
          </p>
          <p>
            <button onClick={()=>{this.onLogin()}}>
              GO GO
            </button>
          </p>
          </div>)
     }
}
export default connect(
  (state) => { return {loading:state.loading.global}}
)(Login);