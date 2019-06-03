  <p align="center">
    <a href="https://www.npmjs.com/package/tailwindcss-vue">
      <img src="https://img.shields.io/npm/v/tailwindcss-vue.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/tailwindcss-vue">
      <img src="https://img.shields.io/npm/dm/tailwindcss-vue.svg" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/tailwindcss-vue">
      <img src="https://img.shields.io/npm/l/tailwindcss-vue.svg" alt="License">
    </a>
    <a href="https://circleci.com/gh/iliyaZelenko/tailwindcss-vue">
      <img src="https://circleci.com/gh/iliyaZelenko/tailwindcss-vue.svg?style=svg" alt="CircleCI Build Status">
    </a>
    <a href="https://lgtm.com/projects/g/iliyaZelenko/tailwindcss-vue/context:javascript">
      <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/iliyaZelenko/tailwindcss-vue.svg?logo=lgtm&logoWidth=18" />
    </a>
    <a href="https://standardjs.com/">
      <img alt="standard code style" src="https://badgen.net/badge/code%20style/standard/f2a" />
    </a>
  </p>

The package it easy to use [Tailwind CSS](https://tailwindcss.com/) with Vue.

Without this package:

```vue
<div class="bg-red-500 hover:bg-purple hover:text-white sm:bg-green-500 md:bg-blue-500 md:w-3/4 lg:bg-pink-500 lg:w-2/4 xl:bg-teal-500 xl:w-1/4">
  Text
</div>
```

With this package:

```vue
<div
  :class="$tailwind({
    default: 'bg-red-500',
    hover: 'bg-purple text-white',
    sm: 'bg-green-500',
    md: 'bg-blue-500 w-3/4',
    lg: 'bg-pink-500 w-2/4',
    xl: 'bg-teal-500 w-1/4'
  })"
>
  Text
</div>
```

## Installation

```
yarn add tailwindcss-vue
# Or 
npm install tailwindcss-vue
```

## Get started

1) Add `Vue.use` for the plugin.

```js
import { TailwindCssVue } from 'tailwindcss-vue'

Vue.use(TailwindCssVue)
```

2) Use `$tailwind` in your components. Here is a complete example:

```vue
<template>
  <div>
    <div
      :class="$tailwind({
        default: 'bg-red-500',
        hover: 'bg-purple text-white',
        sm: 'bg-green-500',
        md: 'bg-blue-500 w-3/4',
        lg: 'bg-pink-500 w-2/4',
        xl: 'bg-teal-500 w-1/4'
      })"
    >
      Text
    </div>
  </div>
</template>
```

There is another use case with the script tag (CDN version of package):

```html
<script src="https://unpkg.com/tailwindcss-vue"></script>
```

Or

```html
<script src="https://cdn.jsdelivr.net/npm/tailwindcss-vue"></script>
```

## Write your suggestions for improvement, I will be glad to read!
