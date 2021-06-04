import * as React from 'react'
import styled from 'styled-components'

const RippleDiv = styled.div`
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
      position: absolute;
      border: calc(4px * var(--newSize)) solid var(--rts-color);
      opacity: 1;
      border-radius: 50%;
      animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
   }
   div:nth-child(2) {
      animation-delay: -0.5s;
   }
   @keyframes ripple {
      0% {
         top: calc(36px * var(--newSize));
         left: calc(36px * var(--newSize));
         width: 0;
         height: 0;
         opacity: 1;
      }
      50% {
         border-color: var(--rts-secondary-color);
      }
      100% {
         top: 0px;
         left: 0px;
         width: calc(72px * var(--newSize));
         height: calc(72px * var(--newSize));
         opacity: 0;
      }
   }
`
interface rippleProps {
   ratio: number
}

const Ripple = ({ ratio }: rippleProps) => {
   const newSize = ratio / 100
   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <RippleDiv className="ring" style={cssValues}>
         <p className="loader-label" aria-hidden="false">
            Content is loading.
         </p>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
      </RippleDiv>
   )
}

export default Ripple
