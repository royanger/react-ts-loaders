import * as React from 'react'
import './hourglass.css'

interface Props {
   type?: string
}

const Hourglass = ({ type }: Props) => {
   return (
      <div className="r-ts-loader">
         <p>What am I getting myself into?</p>
         <div className="hourglass"></div>
      </div>
   )
}

export default Hourglass
