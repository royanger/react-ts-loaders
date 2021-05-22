import * as React from 'react'
import './dualRing.css'

interface Props {
   type?: string
}

const DualRing = ({ type }: Props) => {
   return (
      <div className="r-ts-loader">
         <p>What am I getting myself into?</p>
         <div className="dual-ring"></div>
      </div>
   )
}

export default DualRing
