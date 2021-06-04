import * as React from 'react'
import styled from 'styled-components'

const PulseDiv = styled.div`
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

   div {
      display: inline-block;
      position: absolute;
      left: calc(8px * var(--newSize));
      width: calc(16px * var(--newSize));
      background: var(--rts-color);
      animation: pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
   }
   div:nth-child(2) {
      left: calc(8px * var(--newSize));
      animation-delay: -0.24s;
   }
   div:nth-child(3) {
      left: calc(32px * var(--newSize));
      animation-delay: -0.12s;
      background: var(--rts-secondary-color);
   }
   div:nth-child(4) {
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
         <p className="loader-label" aria-hidden="false">
            Content is loading.
         </p>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
      </PulseDiv>
   )
}

export default Pulse
