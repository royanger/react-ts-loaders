import * as React from 'react'
import Loader from '../lib'

interface Props {
   loader: string
}

const LoaderExample = ({ loader }: Props) => {
   return (
      <div>
         <h2>Example - {loader}</h2>
         <Loader type={loader} size={200} className="test" />
      </div>
   )
}

export default LoaderExample
