import * as React from 'react'

interface LoaderContextInterface {
   type: string
   color?: string
   altColor?: string
   size?: number
   className?: string
   children?: JSX.Element
}

const LoaderContext =
   React.createContext<LoaderContextInterface | undefined>(undefined)

const LoaderProvider = ({
   type,
   color,
   altColor,
   size,
   className,
   children,
}: LoaderContextInterface) => {
   return (
      <LoaderContext.Provider
         value={{ type, color, altColor, size, className }}
      >
         {children}
      </LoaderContext.Provider>
   )
}

function useLoaderContext() {
   const context = React.useContext(LoaderContext)
   if (context === undefined) {
      throw new Error('useLoaderContext must be used within a LoaderProvider')
   }
   return context
}

export { LoaderProvider, useLoaderContext }
