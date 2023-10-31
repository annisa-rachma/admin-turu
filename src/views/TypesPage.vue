<script>
import TableRowTypes from '../components/TableRowTypes.vue'
import UsernameRole from '../components/UsernameRole.vue'
export default {
  emits: ['changePageType', 'handleAddType', 'handleEditType', 'handleDeleteType'],
  props: ['role', 'username', 'types', 'typeByIdData'],
  components: {
    TableRowTypes,
    UsernameRole
  },
  methods: {
    changePageType(page, typeById) {
      this.$emit('changePageType', page, typeById)
    },
    handleEditType(form, id) {
      this.$emit('handleEditType', form, id)
    },
    handleAddType(form) {
      this.$emit('handleAddType', form)
    },
    handleDeleteType(id) {
      this.$emit('handleDeleteType', id)
    }
  }
}
</script>

<template>
  <section>
    <!--Types-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username" />

      <!--primary section-->
      <div class="ml-24 mt-6">
        <!--head-->
        <div class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40">
          <!--lodging title-->
          <div
            class="w-48 h-11 left-[68px] top-[148px] text-sky-600 text-4xl font-bold font-['Open Sans']"
          >
            Types
          </div>
          <!--add new lodging button-->
          <div>
            <button
              @click.prevent="changePageType('add-edit-type-section')"
              @handleAddType="handleEditType"
              type="submit"
              class="w-44 h-11 text-center grid place-content-center mb-4 text-white text-xl font-semibold font-['Open Sans'] bg-sky-600 hover:bg-sky-700 rounded-lg"
            >
              + New Type
            </button>
          </div>
        </div>
        <!--tabel-->
        <div class="flex flex-col mr-40">
          <!--thead-->
          <div class="w-full h-auto px-1 py-3 flex flex-row justify-between text-center">
            <div class="w-1/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">NO</div>
            <div class="w-9/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">NAME</div>
            <div class="w-1/12 px-1"></div>
            <div class="w-1/12 px-1"></div>
          </div>

          <!--tbody-->
          <TableRowTypes
            @handleDeleteType="handleDeleteType"
            @handleEditType="handleEditType"
            @changePageType="changePageType"
            v-for="(type, index) in types"
            :key="index"
            :type="type"
            :index="index"
          />
        </div>
      </div>
    </div>
    <!--Types-->
  </section>
</template>

<style></style>
