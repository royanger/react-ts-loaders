import * as React from 'react'
import './index.scss'

interface Props {
  type: string
}

const Loader = ({ type }: Props) => {
  return (
    <div className="r-ts-loader">
      <p>What am I getting myself into?</p>
      <div className={type}></div>
    </div>
  )
}

export default Loader
