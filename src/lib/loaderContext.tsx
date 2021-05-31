import * as React from 'react'

interface LoaderContextInterface {
   type: string
   color?: string
   altColor?: string
   size?: number
   className?: string
}

const LoaderContext = React.createContext<LoaderContextInterface | null>(null)

export default LoaderContext
