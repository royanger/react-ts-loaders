import * as React from 'react'
import {
   DualRing,
   Hourglass,
   Spinner,
   DotSpinner,
   Pulse,
   Ellipsis,
} from '../lib'

interface Props {
   loader: string
}

const components = {
   dualring: DualRing,
   hourglass: Hourglass,
   spinner: Spinner,
   dotspinner: DotSpinner,
   pulse: Pulse,
   ellipsis: Ellipsis,
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
