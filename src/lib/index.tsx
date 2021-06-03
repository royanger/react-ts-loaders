import * as React from 'react'
import styled from 'styled-components'
import { useLoaderContext, LoaderProvider } from './loaderContext'

import DualRing from './dual-ring/DualRing'
import Hourglass from './hourglass/Hourglass'
import Spinner from './spinner/Spinner'
import DotSpinner from './dot-spinner/DotSpinner'
import Pulse from './pulse/Pulse'
import Ellipsis from './ellipsis/Ellipsis'

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
         <div style={cssValues}>
            <SelectedLoader ratio={selectedSize} />
         </div>
      </Wrapper>
   )
}

export default Loader
export { useLoaderContext, LoaderProvider }
