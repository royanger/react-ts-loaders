import * as React from 'react'
import Loader from '../lib'

interface Props {
   loader: string
}

const LoaderExample = ({ loader }: Props) => {
   return (
      <div>
         <h2>Example - {loader}</h2>
         <Loader
            type={loader}
            color="rgb(155,15,155)"
            altColor="rgb(200,200,20)"
            size={100}
            className="test"
         />
      </div>
   )
}

export default LoaderExample
