import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.querySelector('#root'))

export default () => {
  return <h1>Hi there!</h1>
}