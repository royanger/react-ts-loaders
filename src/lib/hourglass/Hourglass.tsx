import * as React from 'react'
import './hourglass.css'

interface Props {
   type?: string
}

const Hourglass = ({ type }: Props) => {
   return <div className="hourglass"></div>
}

export default Hourglass
