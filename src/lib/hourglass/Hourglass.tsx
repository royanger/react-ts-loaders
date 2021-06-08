import * as React from 'react'
import styled from 'styled-components'

const HourglassDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

   .loader-label {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      position: absolute;
      white-space: nowrap;
   }

   &:after {
      content: ' ';
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: calc(32px * var(--newSize)) solid var(--rts-color);
      border-color: var(--rts-color) transparent var(--rts-secondary-color)
         transparent;
      animation: hourglass 1.2s infinite;
   }
   @keyframes hourglass {
      0% {
         transform: rotate(0);
         animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
         transform: rotate(900deg);
         animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
         transform: rotate(1800deg);
      }
   }
`

interface dualRingProps {
   ratio: number
   message: string
}

const Hourglass = ({ ratio, message }: dualRingProps) => {
   const newSize = ratio / 100

   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <HourglassDiv className="hourglass" style={cssValues}>
         <p className="loader-label" aria-hidden="false">
            {message}
         </p>
      </HourglassDiv>
   )
}

export default Hourglass
