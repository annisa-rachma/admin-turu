<script>
import UsernameRole from '../components/UsernameRole.vue'

export default {
  props: ['role', 'username', 'totalLodging', 'totalType'],
  components: {
    UsernameRole
  }
}
</script>

<template>
  <section class="" id="dashboard-section">
    <!--Dashboard-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username" />
      <!--primary section-->
      <div class="ml-24 mt-4 mr-40">
        <!--welcome-->
        <div class="text-sky-600 text-4xl font-bold font-['Open Sans']">Dashboard</div>
        <div class="flex mt-4">
          <div
            class="w-full h-52 bg-white rounded-2xl shadow flex flex-row px-20 py-6 justify-between"
          >
            <div class="grid content-center">
              <div class="w-80 text-sky-600 text-2xl font-semibold font-['Open Sans']">
                Welcome back, {{ username }}!
              </div>
              <div class="w-80 mt-4 text-zinc-500 text-lg font-normal font-['Open Sans']">
                Ready to create, manage, and excel? Let's make waves together!
              </div>
            </div>
            <div class="grid content-center">
              <img
                class="max-w-60 min-w-40 max-h-60 min-h-40"
                src="../assets/illustration-dashboard.png"
              />
            </div>
          </div>
        </div>
        <!--overview-->
        <div class="mt-6 text-sky-600 text-3xl font-semibold font-['Open Sans']">Overview</div>
        <div class="flex mt-4">
          <div class="w-full flex flex-row justify-between gap-8">
            <div
              class="w-full h-44 p-8 bg-white rounded-2xl shadow grid content-center text-center"
            >
              <div class="text-zinc-500 text-2xl font-normal font-['Open Sans']">
                Total Lodgings
              </div>
              <div class="text-sky-600 text-7xl font-semibold font-['Open Sans']">
                {{ totalLodging }}
              </div>
            </div>
            <div
              class="w-full h-44 p-8 bg-white rounded-2xl shadow grid content-center text-center"
            >
              <div class="text-zinc-500 text-2xl font-normal font-['Open Sans']">Total Types</div>
              <div class="text-sky-600 text-7xl font-semibold font-['Open Sans']">
                {{ totalType }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Dashboard-->
  </section>
</template>

<style></style>
