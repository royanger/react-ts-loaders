import * as React from 'react'
import styled from 'styled-components'

const RingDiv = styled.div`
   display: inline-block;
   transform: translateZ(1px);
}
 div {
   display: inline-block;
   width: calc(64px * var(--newSize));
   height: calc(64px * var(--newSize));
   margin: 8px;
   border-radius: 50%;
   background: var(--rts-color);
   animation: circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
 }
 @keyframes circle {
   0%, 100% {
     animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
   }
   0% {
     transform: rotateY(0deg);
   }
   50% {
     transform: rotateY(1800deg);
     animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
     background: var(--rts-secondary-color);
   }
   100% {
     transform: rotateY(3600deg);
   }
 }
`
interface circleProps {
   ratio: number
}

const Circle = ({ ratio }: circleProps) => {
   const newSize = ratio / 100
   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <RingDiv className="circle" style={cssValues}>
         <div></div>
      </RingDiv>
   )
}

export default Circle
