<script>
export default {
  emits: ['changePage', 'changeStatus'],
  props: ['lodging', 'index'],
  data() {
    return {
      status: '',
      role: localStorage.getItem('role'),
      userId: localStorage.getItem('id')
    }
  },
  methods: {
    changePage(page, lodgingById) {
      this.$emit('changePage', page, lodgingById)
    },
    changeStatus(status, id) {
      this.$emit('changeStatus', status, id)
    }
  },
  created() {
    this.status = this.lodging.status
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
      {{ index + 1 }}
    </div>
    <div class="w-2/12 grid place-content-center px-1">
      <img class="w-28 h-28 rounded-2xl object-cover" :src="lodging.imgUrl" />
    </div>
    <div
      class="w-2/12 grid place-content-center text-center px-1 text-sky-600 text-base font-semibold font-['Open Sans']"
    >
      {{ lodging.name }}
    </div>
    <div
      class="w-2/12 grid place-content-center text-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ lodging.location }}
    </div>
    <div
      class="w-2/12 grid place-content-center text-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ lodging.facility }}
    </div>
    <div
      class="w-2/12 grid place-content-center text-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      Rp
      {{
        new Intl.NumberFormat('id-ID', {
          currency: 'IDR'
        }).format(lodging.price)
      }}
    </div>
    <div
      class="w-1/12 grid place-content-center text-center px-1 text-sky-600 text-base font-normal font-['Open Sans']"
    >
      {{ lodging.User.username }}
    </div>
    <div class="w-2/12 grid place-content-center px-1">
      <select
        v-if="role == 'admin'"
        v-model="status"
        @change="changeStatus(status, lodging.id)"
        class="text-center text-sky-600 text-base font-normal font-['Open Sans'] rounded-md border border-blue-300"
      >
        <option value="" selected disabled>Select</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Archived">Archived</option>
      </select>
      <p v-if="role == 'staff'" class="text-sky-600 text-base font-normal font-['Open Sans']">
        {{ lodging.status }}
      </p>
    </div>
    <div
      @click.prevent="changePage('add-edit-lodging-section', lodging.id)"
      class="w-1/12 grid place-content-center pl-1 pr-6"
    >
      <a v-if="role == 'admin' || (role == 'staff' && userId == lodging.authorId)" href="">
        <img class="w-8 h-8" src="../assets/Edit.png" />
      </a>
    </div>
  </div>
</template>
