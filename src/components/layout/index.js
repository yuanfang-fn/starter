import React from 'react';
import { connect } from 'dva';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("indexprops",this.props);
//     async function timeout(flag) {
//       if (flag) {
//           return 'hello world'
//       } else {
//           throw 'my god, failure'
//       }
//   }
//   function doubleAfter2seconds(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2 * num)
//         }, 2000);
//     } )
// }
// async function testResult() {
//   let first = await doubleAfter2seconds(30);
//   let second = await doubleAfter2seconds(50);
//   let third = await doubleAfter2seconds(30);
//   console.log(first + second + third);
// }
//   console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
//   console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。
//   testResult();
  }
  render() {
    console.log("loading",this.props.loading);
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