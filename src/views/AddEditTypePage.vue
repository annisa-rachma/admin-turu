<script>
import UsernameRole from '../components/UsernameRole.vue'

export default {
  emits: ['changePageType', 'handleAddType', 'handleEditType'],
  props: ['typeByIdData', 'username', 'role'],
  components: {
    UsernameRole
  },
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    changePageType(page, typeById) {
      this.$emit('changePageType', page, typeById)
    },
    handleAddEditType() {
      if (this.typeByIdData) {
        this.$emit('handleEditType', this.form, this.typeByIdData.id)
      } else {
        this.$emit('handleAddType', this.form)
      }
    }
  },
  created() {
    if (this.typeByIdData) {
      this.form.name = this.typeByIdData.name
    }
  }
}
</script>

<template>
  <section id="add-type-section">
    <!--Add type lodging-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username" />

      <!--user section-->

      <!--primary section-->
      <div class="ml-24 mt-6">
        <!--head-->
        <div
          v-if="!typeByIdData"
          class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40"
        >
          <div class="text-sky-600 text-4xl font-bold font-['Open Sans'] mb-4">New Type</div>
        </div>
        <div
          v-if="typeByIdData"
          class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40"
        >
          <div class="text-sky-600 text-4xl font-bold font-['Open Sans'] mb-4">Edit Type</div>
        </div>
        <!--head-->

        <div class="flex flex-row mr-40">
          <!--form-->
          <form @submit.prevent="handleAddEditType" action="" class="w-1/2 grid content-center">
            <div class="flex flex-col mt-2">
              <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
                placeholder="Enter lodging name..."
              />
            </div>
            <div
              class="w-full h-12 mt-8 bg-sky-600 text-xl text-white rounded-lg grid content-center hover:bg-sky-700"
            >
              <button type="submit" class="">Submit</button>
            </div>

            <div
              @click.prevent="changePageType('types-section')"
              class="w-full mt-4 h-12 bg-slate-100 text-xl text-sky-600 rounded-lg border grid content-center border-sky-600 hover:bg-sky-100"
            >
              <button type="" class="">Cancel</button>
            </div>
          </form>
          <!--form-->

          <!--image-->
          <div class="w-1/2 grid content-center mt-12">
            <img class="w-auto h-64 mx-auto" src="../assets/new-type.png" />
            <div
              class="text-center text-zinc-500 text-xl font-normal font-['Open Sans'] px-12 mt-8"
            >
              Have a one-of-a-kind space? Share and let's elevate the guest experience together!
            </div>
          </div>
          <!--image-->
        </div>
      </div>
      <!--primary section-->
    </div>
    <!--Add type lodging-->
  </section>
</template>

<style></style>
