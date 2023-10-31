<script>
import TableRowLodgings from '../components/TableRowLodgings.vue'
import UsernameRole from '../components/UsernameRole.vue'

export default {
  emits: ['changePage', 'changeStatus'],
  props: ['role', 'username', 'lodgings'],
  components : {
    TableRowLodgings,
    UsernameRole
  },
  data() {
    return {
      value : ''
    }
  },
  methods : {
    changePage(page, lodgingById) {
      this.$emit('changePage', page, lodgingById)
    },
    changeStatus(status, id) {
      this.$emit('changeStatus', status, id)
    }
  }
}
</script>

<template>
  <section id="lodgings-section">
    <!--Lodgings-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username"/>


      <!--primary section-->
      <div class="ml-24 mt-6 overflow-auto">
        <!--head-->
        <div class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40">
          <!--lodging title-->
          <div
            class="w-48 h-11 left-[68px] top-[148px] text-sky-600 text-4xl font-bold font-['Open Sans']"
          >
            Lodgings
          </div>
          <!--add new lodging button-->
          <div>
            <button @click.prevent="changePage('add-edit-lodging-section')"
              type="submit"
              class="w-44 h-11 text-center grid place-content-center mb-4 text-white text-xl font-semibold font-['Open Sans'] bg-sky-600 hover:bg-sky-700 rounded-lg"
            >
              + New Lodging
            </button>
          </div>
        </div>
        <!--tabel-->
        <div class="flex flex-col mr-40">
          <!--thead-->
          <div class="w-full h-auto px-1 py-3 flex flex-row justify-between text-center">
            <div class="w-1/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">NO</div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">IMAGE</div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">NAME</div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              LOCATION
            </div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              FACILITY
            </div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">PRICE</div>
            <div class="w-1/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              AUTHOR
            </div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              STATUS
            </div>
            <div class="w-1/12 px-1"></div>
          </div>

          <!--tbody-->
          <TableRowLodgings @changePage="changePage" @changeStatus="changeStatus" v-for="( lodging , index ) in lodgings" :index="index" :key="index" :lodging="lodging" />

          
        </div>
      </div>
    </div>
    <!--Lodgings-->
  </section>
</template>

<style></style>
