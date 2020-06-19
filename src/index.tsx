import '../node_modules/normalize.css/normalize.css'



import * as React from 'react'
import * as ReactDOM from 'react-dom'


const AppContainer = (props) => {
  const {text} = props;
  return (
    <div className="container">
      <p>{text}</p>
    </div>
  )
}

const App = document.getElementById('app')
ReactDOM.render(<AppContainer text="I want to see kanribo"/>, App)