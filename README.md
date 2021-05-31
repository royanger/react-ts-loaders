# React Loaders

![React Typescript Loaders](README_logo.gif)

A react library that provides components for pure CSS loaders. The library has full TypeScript support.

[![NPM](https://img.shields.io/npm/v/react-ts-loaders.svg)](https://www.npmjs.com/package/react-ts-loaders)

## Install

```bash
npm install --save react-ts-loaders
```

## Usage

### No Configuration

```tsx
import * as React from 'react'

import Loader from 'react-ts-loaders'

const Example = () => {
   return <Loader />
}
```

### Simple Configuration

```tsx
import * as React from 'react'

import Loader from 'react-ts-loaders'

const Example = () => {
   return <Loader type="spinner" color="blue" />
}
```

## Full Configuration

```tsx
import * as React from 'react'

import Loader from 'react-ts-loaders'

const Example = () => {
   return <Loader type="spinner" color="blue" altColor="lightblue" />
}
```

## Context Configuration

Are you planning to use Loaders in many places and want to control their type, colors, size and classes from one location? You can easily use Context to create a base configuration.

```tsx
import LoaderContext from '../src/lib/loaderContext'

ReactDOM.render(
   <React.StrictMode>
      <LoaderContext.Provider
         value={{
            type: 'dualring',
            color: 'rgb(0, 128, 58)',
            altColor: 'rgb(241, 25, 213)',
            size: 100,
            className: 'help',
         }}
      >
         <App />
      </LoaderContext.Provider>
```

The Context Configuration takes all of the same props as a single `<Loader>` component.

With the exception of `className`, the props you supply to the Context Configuration can be **_overridden_** on a specific use of the `Loader` component. IE, you can set all Loaders to be a red, but if you do `<Loader color="rgb(0, 128, 58)" />` then that loader will be green. This gives you the flexibility to have one off loaders, while having a default configuration for your application.

As mentioned, `className` does behave a little differently. It will combine the classes given via Context with those given via the specific component instance. The resulting class list will include all classes.

## Props

All props are optional. If you do specify a type, then the `spinner` type will be used. If you don't specify any colors then the `currentColor` for the element will be used and the background will be transparent.

### `type`

Specify the type of loader you want to use. The current options are `spinner`, `ellipsis`, `dualring`, `hourglass`, `dotspinner` and `pulse`.

### `color`

The color to use for the loader. If no `altColor` is specified then `color` is used for all foreground elements and the loader will have one consistent color.

Valid ways to define your color:

-  `color="blue"`
-  `color="rgb(54, 3, 95)"`
-  `color="rgba(54, 3, 95,.3)"`
-  `color="hsl(147, 50%, 47%)"`
-  `color="hsla(147, 50%, 47%,.2)"`

### `altColor`

This will define the secondary foreground color for the loader. This will make it into a duotone variation. The `altColor` can be defined the same way as `color` above.

### `size`

This number should represent a percent, just without the % sign. It will increase of decrease the size of the loader appropriately.

Examples:

-  `size={200}` - The loader will be 200% default size
-  `size={50}` - The loader will be 50% default size

### `className`

Pass any classes you want to the Loader. These will be applied to the outer most div so you can target styling.

## Credit

At this time, all of the loaders used in this package from from Loading.io and can be found at [Loading.io Pure CSS Loader](https://loading.io/css/). These is a great resource and all of the code has been released under the CCO License.

## License

MIT © [royanger](https://github.com/royanger)
