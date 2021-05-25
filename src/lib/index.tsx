import * as React from 'react'

import DualRing from './dual-ring/DualRing'
import Hourglass from './hourglass/Hourglass'
import Spinner from './spinner/Spinner'
import DotSpinner from './dot-spinner/DotSpinner'
import Pulse from './pulse/Pulse'
import Ellipsis from './ellipsis/Ellipsis'
import './spinner/spinner.css'

const components: { [index: string]: any } = {
   dualring: DualRing,
   hourglass: Hourglass,
   spinner: Spinner,
   dotspinner: DotSpinner,
   pulse: Pulse,
   ellipsis: Ellipsis,
}

interface LoaderProps {
   type: string
   color: string
}

const Loader = ({ type, color }: LoaderProps) => {
   const SelectLoader = components[type]

   const cssProperties = { width: '100%', '--rts-color': color }

   return (
      <div className="rts-loader" style={cssProperties}>
         <p>{type}</p>
         <SelectLoader />
      </div>
   )
}

export default Loader
