# React Loaders

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

## Credit

At this time, all of the loaders used in this package from from Loading.io and can be found at [Loading.io Pure CSS Loader](https://loading.io/css/). These is a great resource and all of the code has been released under the CCO License.

## License

MIT © [royanger](https://github.com/royanger)
