<template>
  <div>
    <div class="bg-red-500 hover:bg-purple hover:text-white sm:bg-green-500 md:bg-blue-500 md:w-3/4 lg:bg-pink-500 lg:w-2/4 xl:bg-teal-500 xl:w-1/4">
      Text
    </div>

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

<script>
// import { MAIN_MODULE } from '../config'

export default {
}
</script>
