import * as React from 'react'
import styled from 'styled-components'
import LoaderContext from './loaderContext'

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
   return (
      <LoaderContext.Consumer>
         {data => {
            const selectedType = type || data?.type || 'ellipsis'
            const SelectedLoader = components[selectedType]

            const primaryColor = color || data?.color || 'currentColor'
            const secondaryColor = altColor || data?.altColor || primaryColor

            const selectedSize = size || data?.size || 100

            const classes = `${className ? className : ''} ${
               data?.className ? data.className : ''
            } `
            console.log('data', data)
            console.log('color', classes)

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
         }}
      </LoaderContext.Consumer>
   )
}

export default Loader
