<script>
export default {
  props:['currentPage'],
  emits: ['changePage', 'handleLogout'],
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    }, 
    handleLogout() {
      this.$emit('handleLogout')
    }
  }
}
</script>

<template>
  <section>
    <!--navbar-->
    <div
      class="left-0 m-auto top-0 fixed w-64 h-full flex flex-col bg-gradient-to-b from-sky-600 to-sky-500 shadow"
    >
      <div class="ml-auto mr-auto mt-12 mb-12 flex flex-col">
        <!--logo-->
        <div class="flex flex-row justify-center">
          <div class="left-0">
            <img class="w-16 h-12 left-[0.37px]" src="../assets/logo.png" />
          </div>
          <div class="ml-4 mt-1 text-white text-4xl font-bold font-['Open Sans']">turu</div>
        </div>
        <!--navbar-->
        <div class="mt-8 flex flex-col justify-center">
          <!--navbar-dashboard-->
          <div
            @click.prevent="changePage('dashboard-section')" :class="currentPage == 'dashboard-section' ? 'bg-sky-700' : ''"
            class="w-64 h-16 m-auto mt-4 hover:bg-sky-700"
          >
            <a href="">
              <div class="flex-row flex ml-12 mt-4">
                <img class="w-8 h-8" src="../assets/home.png" />
                <div class="ml-4 mt-0.5 text-white text-lg font-semibold font-['Open Sans']">
                  Dashboard
                </div>
              </div>
            </a>
          </div>
          <!--navbar-lodgings-->
          <div 
            @click.prevent="changePage('lodgings-section')"  :class="currentPage == 'lodgings-section' ? 'bg-sky-700' : ''"
            class="w-64 h-16 m-auto hover:bg-sky-700"
          >
            <a href="">
              <div class="flex-row flex ml-12 mt-4">
                <img class="w-8 h-8" src="../assets/lodging.png" />
                <div class="ml-4 mt-0.5 text-white text-lg font-semibold font-['Open Sans']">
                  Lodgings
                </div>
              </div>
            </a>
          </div>
          <!--navbar-types-->
          <div
            @click.prevent="changePage('types-section')" :class="currentPage == 'types-section' ? 'bg-sky-700' : ''"
            class="w-64 h-16 m-auto hover:bg-sky-700"
          >
            <a href="">
              <div class="flex-row flex ml-12 mt-4">
                <img class="w-8 h-8" src="../assets/types.png" />
                <div class="ml-4 mt-0.5 text-white text-lg font-semibold font-['Open Sans']">
                  Types
                </div>
              </div>
            </a>
          </div>
          <!--navbar-history-->
          <div
            @click.prevent="changePage('history-section')" :class="currentPage == 'history-section' ? 'bg-sky-700' : ''"
            class="w-64 h-16 m-auto hover:bg-sky-700"
          >
            <a href="http://localhost:5173/histories">
              <div class="flex-row flex ml-12 mt-4">
                <img class="w-8 h-8" src="../assets/history.png" />
                <div class="ml-4 mt-0.5 text-white text-lg font-semibold font-['Open Sans']">
                  History
                </div>
              </div>
            </a>
          </div>
          <!--navbar-logout-->
          <div @click.prevent="handleLogout()" class="w-64 h-16 m-auto mt-52 hover:bg-sky-700">
            <a href="">
              <div class="flex-row flex ml-12 mt-4">
                <img class="w-8 h-8" src="../assets/logout.png" />
                <div class="ml-4 mt-0.5 text-white text-lg font-semibold font-['Open Sans']">
                  Logout
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--navbar-->
  </section>
</template>

<style></style>
