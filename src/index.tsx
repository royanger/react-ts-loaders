import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { LoaderProvider } from '../src/lib/'

ReactDOM.render(
   <React.StrictMode>
      {/* <LoaderProvider
         type="dualring"
         color="rgb(0, 128, 58)"
         altColor="rgb(241, 25, 213)"
         size={300}
         className="help"
      > */}
      <App />
      {/* </LoaderProvider> */}
   </React.StrictMode>,
   document.getElementById('root')
)
