import * as React from 'react'
import styled from 'styled-components'

const RollerDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

   div {
      animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: calc(40px * var(--newSize)) calc(40px * var(--newSize));
   }
   div:after {
      content: ' ';
      display: block;
      position: absolute;
      width: calc(7px * var(--newSize));
      height: calc(7px * var(--newSize));
      border-radius: 50%;
      background: var(--rts-color);
      margin: -4px 0 0 -4px;
   }
   div:nth-child(1) {
      animation-delay: -0.036s;
   }
   div:nth-child(1):after {
      top: calc(63px * var(--newSize));
      left: calc(63px * var(--newSize));
   }
   div:nth-child(2) {
      animation-delay: -0.072s;
   }
   div:nth-child(2):after {
      top: calc(68px * var(--newSize));
      left: calc(56px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(3) {
      animation-delay: -0.108s;
   }
   div:nth-child(3):after {
      top: calc(71px * var(--newSize));
      left: calc(48px * var(--newSize));
   }
   div:nth-child(4) {
      animation-delay: -0.144s;
   }
   div:nth-child(4):after {
      top: calc(72px * var(--newSize));
      left: calc(40px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(5) {
      animation-delay: -0.18s;
   }
   div:nth-child(5):after {
      top: calc(71px * var(--newSize));
      left: calc(32px * var(--newSize));
   }
   div:nth-child(6) {
      animation-delay: -0.216s;
   }
   div:nth-child(6):after {
      top: calc(68px * var(--newSize));
      left: calc(24px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(7) {
      animation-delay: -0.252s;
   }
   div:nth-child(7):after {
      top: calc(63px * var(--newSize));
      left: calc(17px * var(--newSize));
   }
   div:nth-child(8) {
      animation-delay: -0.288s;
   }
   div:nth-child(8):after {
      top: calc(56px * var(--newSize));
      left: calc(12px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   @keyframes roller {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`
interface rollerProps {
   ratio: number
}

const Roller = ({ ratio }: rollerProps) => {
   const newSize = ratio / 100
   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <RollerDiv className="roller" style={cssValues}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </RollerDiv>
   )
}

export default Roller
