import * as React from 'react'
import styled from 'styled-components'

const PulseDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

   div {
      display: inline-block;
      position: absolute;
      left: calc(8px * var(--newSize));
      width: calc(16px * var(--newSize));
      background: var(--rts-color);
      animation: pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
   }
   div:nth-child(1) {
      left: calc(8px * var(--newSize));
      animation-delay: -0.24s;
   }
   div:nth-child(2) {
      left: calc(32px * var(--newSize));
      animation-delay: -0.12s;
      background: var(--rts-secondary-color);
   }
   div:nth-child(3) {
      left: calc(56px * var(--newSize));
      animation-delay: 0;
   }
   @keyframes pulse {
      0% {
         top: calc(8px * var(--newSize));
         height: calc(64px * var(--newSize));
      }
      50%,
      100% {
         top: calc(24px * var(--newSize));
         height: calc(32px * var(--newSize));
      }
   }
`

interface dualRingProps {
   ratio: number
}

const Pulse = ({ ratio }: dualRingProps) => {
   const newSize = (ratio ? ratio : 100) / 100

   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <PulseDiv className="pulse" style={cssValues}>
         <div></div>
         <div></div>
         <div></div>
      </PulseDiv>
   )
}

export default Pulse
