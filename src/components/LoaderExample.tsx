import * as React from 'react'
import Loader from '../lib'

interface Props {
   loader: string
}

const LoaderExample = ({ loader }: Props) => {
   return (
      <div>
         <h2>Example - {loader}</h2>
         <Loader type={loader} color="blue" altColor="red" />
      </div>
   )
}

export default LoaderExample
