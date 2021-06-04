import * as React from 'react'
import styled from 'styled-components'
import { useLoaderContext, LoaderProvider } from './loaderContext'

import DualRing from './dual-ring/DualRing'
import Hourglass from './hourglass/Hourglass'
import Spinner from './spinner/Spinner'
import DotSpinner from './dot-spinner/DotSpinner'
import Pulse from './pulse/Pulse'
import Ellipsis from './ellipsis/Ellipsis'
import Ring from './ring/Ring'
import Roller from './roller/Roller'
import Grid from './grid/Grid'
import Ripple from './ripple/Ripple'
import Circle from './circle/Circle'

const components: { [index: string]: any } = {
   dualring: DualRing,
   hourglass: Hourglass,
   spinner: Spinner,
   dotspinner: DotSpinner,
   pulse: Pulse,
   ellipsis: Ellipsis,
   ring: Ring,
   roller: Roller,
   grid: Grid,
   ripple: Ripple,
   circle: Circle,
}

interface LoaderProps {
   type?: string
   color?: string
   altColor?: string
   size?: number
   className?: string
}

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
`

const Loader = ({ type, color, altColor, size, className }: LoaderProps) => {
   const context = useLoaderContext()

   const selectedType = type || context?.type || 'ellipsis'
   const SelectedLoader = components[selectedType]

   const primaryColor = color || context?.color || 'currentColor'
   const secondaryColor = altColor || context?.altColor || primaryColor

   const selectedSize = size || context?.size || 100

   const classes = `${className ? className : ''} ${
      context?.className ? context.className : ''
   } `

   const cssValues = {
      '--rts-color': primaryColor,
      '--rts-secondary-color': secondaryColor,
   } as React.CSSProperties

   return (
      <Wrapper className={classes}>
         <div style={cssValues} role="alert" aria-live="assertive">
            <SelectedLoader ratio={selectedSize} />
         </div>
      </Wrapper>
   )
}

export default Loader
export { useLoaderContext, LoaderProvider }
