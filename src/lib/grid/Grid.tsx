import * as React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
   display: inline-block;
   position: relative;
   width: calc(80px * var(--newSize));
   height: calc(80px * var(--newSize));

 div {
   position: absolute;
   width: 16px;calc(80px * var(--newSize));
   height: 16px;calc(80px * var(--newSize));
   border-radius: 50%;
   background: var(--rts-color);
   animation: grid 1.2s linear infinite;
 }
 div:nth-child(1) {
   top: calc(8px * var(--newSize));
   left: calc(8px * var(--newSize));
   animation-delay: 0s;
 }
 div:nth-child(2) {
   top: calc(8px * var(--newSize));
   left: calc(32px * var(--newSize));
   animation-delay: -0.4s;
   background: var(--rts-secondary-color);
 }
 div:nth-child(3) {
   top: calc(8px * var(--newSize));
   left: calc(56px * var(--newSize));
   animation-delay: -0.8s;
 }
 div:nth-child(4) {
   top: calc(32px * var(--newSize));
   left: calc(8px * var(--newSize));
   animation-delay: -0.4s;
   background: var(--rts-secondary-color);
 }
 div:nth-child(5) {
   top: calc(32px * var(--newSize));
   left: calc(32px * var(--newSize));
   animation-delay: -0.8s;
 }
 div:nth-child(6) {
   top: calc(32px * var(--newSize));
   left: calc(56px * var(--newSize));
   animation-delay: -1.2s;
   background: var(--rts-secondary-color);
 }
 div:nth-child(7) {
   top: calc(56px * var(--newSize));
   left: calc(8px * var(--newSize));
   animation-delay: -0.8s;
 }
 div:nth-child(8) {
   top: calc(56px * var(--newSize));
   left: calc(32px * var(--newSize));
   animation-delay: -1.2s;
   background: var(--rts-secondary-color);
 }
 div:nth-child(9) {
   top: calc(56px * var(--newSize));
   left: calc(56px * var(--newSize));
   animation-delay: -1.6s;
 }
 @keyframes grid {
   0%, 100% {
     opacity: 1;
   }
   50% {
     opacity: 0.5;
   }
 }
`
interface gridProps {
   ratio: number
}

const Grid = ({ ratio }: gridProps) => {
   const newSize = ratio / 100
   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <GridDiv className="grid" style={cssValues}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </GridDiv>
   )
}

export default Grid