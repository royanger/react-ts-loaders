import * as React from 'react'
import styled from 'styled-components'

const DualRingDiv = styled.div`
   display: inline-block;
   width: 80px;
   height: 80px;

   &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid var(--rts-color);
      border-color: var(--rts-color) transparent var(--rts-secondary-color)
         transparent;
      animation: dual-ring 1.2s linear infinite;

      @keyframes dual-ring {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(360deg);
         }
      }
   }
`

const DualRing = () => {
   return <DualRingDiv className="dual-ring"></DualRingDiv>
}

export default DualRing
