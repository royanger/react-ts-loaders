import * as React from 'react'
import { DualRing, Hourglass } from '../lib'

interface Props {
   loader: string
}

const components = {
   dualring: DualRing,
   hourglass: Hourglass,
}

const LoaderExample = ({ loader }: Props) => {
   const SelectLoader = components[loader]
   return (
      <div>
         <h2>Example</h2>
         <SelectLoader />
      </div>
   )
}

export default LoaderExample
