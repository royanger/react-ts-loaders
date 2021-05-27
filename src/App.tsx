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
      <div>
         <header>
            <h1>All Loaders</h1>
            <p>
               For a more interactive example of the Loaders, please visit{' '}
               <a href="https://loaders.royanger.app">
                  https://loaders.royanger.app
               </a>
            </p>
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
