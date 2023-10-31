<script>
export default {
  props: ['name']
}
</script>

<template>
  <div
    class="w-96 h-12 mt-8 bg-sky-600 text-xl text-white rounded-lg grid content-center hover:bg-sky-700"
  >
    <button type="submit" class="">{{ name }}</button>
  </div>
</template>
