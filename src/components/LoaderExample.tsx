import * as React from 'react'
import { Loader } from '../lib'

interface Props {
  loader: string
}

const LoaderExample = ({ loader }: Props) => {
  return (
    <div>
      <h2>Example</h2>
      <Loader type={loader} />
    </div>
  )
}

export default LoaderExample
