<script>
import TableRowHistoryVue from '../components/TableRowHistory.vue'
import UsernameRole from '../components/UsernameRole.vue'

export default {
  props: ['histories', 'role', 'username'],
  components: {
    TableRowHistoryVue,
    UsernameRole
  }
}
</script>

<template>
  <section id="history-section">
    <!--history-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username" />

      <!--primary section-->
      <div class="ml-24 mt-6">
        <!--head-->
        <div class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40">
          <!--lodging title-->
          <div class="mb-4 text-sky-600 text-4xl font-bold font-['Open Sans']">Histories</div>
        </div>
        <!--tabel-->
        <div class="flex flex-col mr-40">
          <!--thead-->
          <div class="w-full h-auto px-1 py-3 flex flex-row justify-between text-center">
            <div class="w-1/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">NO</div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              LODGING NAME
            </div>
            <div class="w-4/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              DESCRIPTION
            </div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              CREATED AT
            </div>
            <div class="w-2/12 px-1 text-sky-600 text-base font-bold font-['Open Sans']">
              UPDATED BY
            </div>
          </div>

          <!--tbody-->
          <TableRowHistoryVue
            v-for="(history, index) in histories"
            :history="history"
            :key="index"
            :index="index"
          />
        </div>
      </div>
    </div>
    <!--history-->
  </section>
</template>

<style></style>
