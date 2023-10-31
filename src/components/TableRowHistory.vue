<script>
export default {
  props: ['history', 'index']
}
</script>
<template>
  <div
    class="w-full h-auto mt-2 px-1 py-3 text-center bg-white rounded-2xl shadow flex flex-row justify-between"
  >
    <div
      class="text-center w-1/12 grid place-content-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ index + 1 }}
    </div>
    <div
      class="w-2/12 grid place-content-center px-1 text-sky-600 text-base font-semibold font-['Open Sans']"
    >
      {{ history.lodgingName }}
    </div>
    <div
      class="w-4/12 grid place-content-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ history.description }}
    </div>
    <div
      class="w-2/12 grid place-content-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ history.createdAt }}
    </div>
    <div
      class="w-2/12 grid place-content-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ history.updatedBy }}
    </div>
  </div>
</template>
