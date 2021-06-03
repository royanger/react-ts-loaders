import * as React from 'react'
import styled from 'styled-components'

const RingDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

   div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: calc(64px * var(--newSize));
      height: calc(64px * var(--newSize));
      margin: calc(8px * var(--newSize));
      border: calc(8px * var(--newSize)) solid var(--rts-color);
      border-radius: 50%;
      animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--rts-color) transparent transparent transparent;
   }
   div:nth-child(1) {
      animation-delay: -0.45s;
   }
   div:nth-child(2) {
      animation-delay: -0.3s;
   }
   div:nth-child(3) {
      animation-delay: -0.15s;
   }
   @keyframes ring {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`
interface ringProps {
   ratio: number
}

const Ring = ({ ratio }: ringProps) => {
   const newSize = ratio / 100
   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <RingDiv className="ring" style={cssValues}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </RingDiv>
   )
}

export default Ring
