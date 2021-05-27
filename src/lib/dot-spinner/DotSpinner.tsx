import * as React from 'react'
import styled from 'styled-components'

const DotSpinnerDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

   div {
      position: absolute;
      width: calc(6px * var(--newSize));
      height: calc(6px * var(--newSize));
      background: var(--rts-color);
      border-radius: 50%;
      animation: dotspinner 1.2s linear infinite;
   }
   div:nth-child(1) {
      animation-delay: 0s;
      top: calc(37px * var(--newSize));
      left: calc(66px * var(--newSize));
   }
   div:nth-child(2) {
      animation-delay: -0.1s;
      top: calc(22px * var(--newSize));
      left: calc(62px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(3) {
      animation-delay: -0.2s;
      top: calc(11px * var(--newSize));
      left: calc(52px * var(--newSize));
   }
   div:nth-child(4) {
      animation-delay: -0.3s;
      top: calc(7px * var(--newSize));
      left: calc(37px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(5) {
      animation-delay: -0.4s;
      top: calc(11px * var(--newSize));
      left: calc(22px * var(--newSize));
   }
   div:nth-child(6) {
      animation-delay: -0.5s;
      top: calc(22px * var(--newSize));
      left: calc(11px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(7) {
      animation-delay: -0.6s;
      top: calc(37px * var(--newSize));
      left: calc(7px * var(--newSize));
   }
   div:nth-child(8) {
      animation-delay: -0.7s;
      top: calc(52px * var(--newSize));
      left: calc(11px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(9) {
      animation-delay: -0.8s;
      top: calc(62px * var(--newSize));
      left: calc(22px * var(--newSize));
   }
   div:nth-child(10) {
      animation-delay: -0.9s;
      top: calc(66px * var(--newSize));
      left: calc(37px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   div:nth-child(11) {
      animation-delay: -1s;
      top: calc(62px * var(--newSize));
      left: calc(52px * var(--newSize));
   }
   div:nth-child(12) {
      animation-delay: -1.1s;
      top: calc(52px * var(--newSize));
      left: calc(62px * var(--newSize));
      background: var(--rts-secondary-color);
   }
   @keyframes dotspinner {
      0%,
      20%,
      80%,
      100% {
         transform: scale(1);
      }
      50% {
         transform: scale(1.5);
      }
   }
`

interface dotSpinnerProps {
   ratio: number
}
interface cssProps {
   boxShadow: string
   '--newSize': number
}

const DotSpinner = ({ ratio }: dotSpinnerProps) => {
   const newSize = (ratio ? ratio : 100) / 100
   const cssValues: cssProps = {
      boxShadow: 'none',
      '--newSize': newSize,
   }

   return (
      <DotSpinnerDiv className="dotspinner" style={cssValues}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </DotSpinnerDiv>
   )
}

export default DotSpinner
