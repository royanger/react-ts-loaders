import * as React from 'react'
import './index.scss'
import LoaderExample from './components/LoaderExample'

function App() {
   const loaders = [
      'dualring',
      'hourglass',
      'spinner',
      'dotspinner',
      'pulse',
      'ellipsis',
   ]
   return (
      <div className="App">
         <header className="App-header">
            <p>This is the example page </p>
         </header>
         <article>
            <div className="examples">
               {loaders.map(loader => {
                  return <LoaderExample key={loader} loader={loader} />
               })}
            </div>
         </article>
      </div>
   )
}

export default App
