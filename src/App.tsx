import * as React from 'react'
import './index.scss'
import { Loader } from './lib'
import LoaderExample from './components/LoaderExample'

function App() {
  const loaders = ['dual-ring', 'hourglass']
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
