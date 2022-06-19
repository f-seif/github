import React, {Component} from 'react'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container pt-5">
          <h1>Hello, please fill in this form</h1>
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
