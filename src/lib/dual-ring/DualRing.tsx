import * as React from 'react'
import styled from 'styled-components'

const DualRingDiv = styled.div`
   display: inline-block;
   // width: 80px;
   // height: 80px;

   &:after {
      content: ' ';
      display: block;
      width: calc(64px * var(--newSize));
      height: calc(64px * var(--newSize));
      margin: 8px;
      border-radius: 50%;
      border: calc(6px * var(--newSize)) solid var(--rts-color);
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

interface dualRingProps {
   ratio: number
}

const DualRing = ({ ratio }: dualRingProps) => {
   const newSize = (ratio ? ratio : 100) / 100

   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return <DualRingDiv className="dual-ring" style={cssValues}></DualRingDiv>
}

export default DualRing
