<script>
export default {
    emits: ['changePageType', 'handleDeleteType'],
    props: ['type', 'index', 'typeByIdData'],
    methods: {
      changePageType(page, typeById) {
        this.$emit('changePageType', page, typeById)
      },
      handleDeleteType(id) {
        this.$emit('handleDeleteType', id)
      }
    }
}
</script>

<template>
  <div
    class="w-full h-auto mt-2 px-1 py-3 bg-white rounded-2xl shadow flex flex-row justify-between"
  >
    <div
      class="text-center w-1/12 grid place-content-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{index+1}}
    </div>

    <div
      class="w-9/12 grid place-content-center px-1 text-sky-600 text-base font-semibold font-['Open Sans']"
    >
      {{type.name}}
    </div>

    <div @click.prevent="changePageType('add-edit-type-section', type.id)" class="w-1/12 grid place-content-center pl-1 pr-6">
      <a  href="">
        <img class="w-8 h-8" src="../assets/Edit.png" />
      </a>
    </div>
    <div @click.prevent="handleDeleteType(type.id)" class="w-1/12 grid place-content-center pl-1 pr-6">
      <a href="">
        <img class="w-8 h-8" src="../assets/Delete.png" />
      </a>
    </div>
  </div>
</template>
