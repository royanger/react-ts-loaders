import * as React from 'react'
import styled from 'styled-components'

const SpinnerDiv = styled.div`
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
      transform-origin: calc(40px * var(--newSize)) calc(40px * var(--newSize));
      animation: spinner 1.2s linear infinite;
   }
   div:after {
      content: ' ';
      display: block;
      position: absolute;
      top: calc(3px * var(--newSize));
      left: calc(37px * var(--newSize));
      width: calc(6px * var(--newSize));
      height: calc(18px * var(--newSize));
      border-radius: 20%;
      background: var(--rts-color);
   }
   div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
   }
   div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
   }
   div:nth-child(2):after {
      background: var(--rts-secondary-color);
   }
   div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
   }
   div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
   }
   div:nth-child(4):after {
      background: var(--rts-secondary-color);
   }
   div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
   }
   div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
   }
   div:nth-child(6):after {
      background: var(--rts-secondary-color);
   }
   div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
   }
   div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
   }
   div:nth-child(8):after {
      background: var(--rts-secondary-color);
   }
   div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
   }
   div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
   }
   div:nth-child(10):after {
      background: var(--rts-secondary-color);
   }
   div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
   }
   div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
   }
   div:nth-child(12):after {
      background: var(--rts-secondary-color);
   }
   .rts-loader .spinner div:nth-child(12):after {
      background: var(--rts-secondary-color);
   }
   @keyframes spinner {
      0% {
         opacity: 1;
      }
      100% {
         opacity: 0;
      }
   }
`

interface dualRingProps {
   ratio: number
   message: string
}

const Spinner = ({ ratio, message }: dualRingProps) => {
   const newSize = (ratio ? ratio : 100) / 100

   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <SpinnerDiv className="spinner" style={cssValues}>
         <p className="loader-label" aria-hidden="false">
            {message}
         </p>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
      </SpinnerDiv>
   )
}

export default Spinner
