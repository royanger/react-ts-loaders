import * as React from 'react'
import './index.scss'
import LoaderExample from './components/LoaderExample'

function App() {
   const loaders = ['dualring', 'hourglass']
   return (
      <div className="App">
         <header className="App-header">
            <p>This is the example page </p>
         </header>
         <article>
            {loaders.map(loader => {
               return <LoaderExample key={loader} loader={loader} />
            })}
         </article>
      </div>
   )
}

export default App
