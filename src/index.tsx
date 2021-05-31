import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoaderContext from '../src/lib/loaderContext'

ReactDOM.render(
   <React.StrictMode>
      <LoaderContext.Provider
         value={{
            type: 'dualring',
            color: 'rgb(0, 128, 58)',
            altColor: 'rgb(241, 25, 213)',
            size: 300,
            className: 'help',
         }}
      >
         <App />
      </LoaderContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
)
