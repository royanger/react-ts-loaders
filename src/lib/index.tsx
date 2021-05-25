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
   type?: string
   color?: string
   altColor?: string
}

interface cssProps {
   color: string
   '--rts-color': string
   '--rts-secondary-color'?: string
   '--rts-background-color'?: string
}

const Loader = ({ type, color, altColor }: LoaderProps) => {
   const selectedType = type ? type : 'spinner'
   const SelectedLoader = components[selectedType]

   const primaryColor = color ? color : 'currentColor'
   const secondaryColor = altColor ? altColor : primaryColor

   const cssValues: cssProps = {
      color: primaryColor,
      '--rts-color': primaryColor,
      '--rts-secondary-color': secondaryColor,
   }

   return (
      <div className="rts-loader" style={cssValues}>
         <SelectedLoader />
      </div>
   )
}

export default Loader
