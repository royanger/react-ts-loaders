import * as React from 'react'
import Loader from '../lib'

interface Props {
   loader: string
}

const LoaderExample = ({ loader }: Props) => {
   return (
      <div style={{ color: 'saddlebrown' }}>
         <h2>Example - {loader}</h2>
         <Loader
            type={loader}
            color="hsla(147, 50%, 47%,.2)"
            altColor="lightblue"
         />
      </div>
   )
}

export default LoaderExample
