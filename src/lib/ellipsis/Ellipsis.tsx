import * as React from 'react'
import styled from 'styled-components'

const EllipsisDiv = styled.div`
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
      top: calc(33px * var(--newSize));
      width: calc(13px * var(--newSize));
      height: calc(13px * var(--newSize));
      border-radius: 50%;
      background: var(--rts-color);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
   }
   div:nth-child(2) {
      left: calc(8px * var(--newSize));
      animation: ellipsis1 0.6s infinite;
   }
   div:nth-child(3) {
      left: calc(8px * var(--newSize));
      animation: ellipsis2 0.6s infinite;
      background: var(--rts-secondary-color);
   }
   div:nth-child(4) {
      left: calc(32px * var(--newSize));
      animation: ellipsis2 0.6s infinite;
   }
   div:nth-child(5) {
      left: calc(56px * var(--newSize));
      animation: ellipsis3 0.6s infinite;
      background: var(--rts-secondary-color);
   }
   @keyframes ellipsis1 {
      0% {
         transform: scale(0);
      }
      100% {
         transform: scale(1);
      }
   }
   @keyframes ellipsis3 {
      0% {
         transform: scale(1);
      }
      100% {
         transform: scale(0);
      }
   }
   @keyframes ellipsis2 {
      0% {
         transform: translate(0, 0);
      }
      100% {
         transform: translate(24px, 0);
      }
   }
`

interface ellipsisProps {
   ratio: number
   message: string
}

const Ellipsis = ({ ratio, message }: ellipsisProps) => {
   const newSize = (ratio ? ratio : 100) / 100

   const cssValues = {
      '--newSize': newSize,
   } as React.CSSProperties

   return (
      <EllipsisDiv className="ellipsis" style={cssValues}>
         <p className="loader-label" aria-hidden="false">
            {message}
         </p>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
         <div aria-hidden="true"></div>
      </EllipsisDiv>
   )
}

export default Ellipsis
