import React from 'react';
import logo from './logo.svg';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    async function timeout(flag) {
      if (flag) {
          return 'hello world'
      } else {
          throw 'my god, failure'
      }
  }
  function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}
async function testResult() {
  let first = await doubleAfter2seconds(30);
  let second = await doubleAfter2seconds(50);
  let third = await doubleAfter2seconds(30);
  console.log(first + second + third);
}
  console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
  console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。
  testResult();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
