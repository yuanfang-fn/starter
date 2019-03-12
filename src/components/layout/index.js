import React from 'react';
import { connect } from 'dva';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello INDEX
          </p>
        </header>
      </div>
    );
  }
}


export default connect((state) => { 
  return {...state.global, ...{loading:state.loading.global} }} )(App);