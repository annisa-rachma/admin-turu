<script>
import AddEditFormVue from '../components/AddEditForm.vue'
import UsernameRole from '../components/UsernameRole.vue'

export default {
  emits: ['handleAddLodging', 'changePage', 'pageType', 'handleEditLodging'],
  props: ['role', 'username', 'types', 'authorId', 'lodgingByIdData'],
  components: {
    AddEditFormVue,
    UsernameRole
  },
  methods: {
    handleAddLodging(form) {
      this.$emit('handleAddLodging', form)
    },
    handleEditLodging(form, id) {
      this.$emit('handleEditLodging', form, id)
    },
    changePage(page, lodgingById) {
      this.$emit('changePage', page, lodgingById)
      // this.dataLodgingById = lodgingById
    }
  }
}
</script>

<template>
  <section>
    <!--Add new lodging-->
    <div class="flex flex-col ml-64 h-full mb-24">
      <!--user section-->
      <UsernameRole :role="role" :username="username" />
      <!--user section-->

      <!--primary section-->
      <div class="ml-24 mt-6">
        <!--head-->
        <div class="flex flex-row justify-between border-b-2 border-zinc-200 mr-40">
          <div
            v-if="!lodgingByIdData"
            class="text-sky-600 text-4xl font-bold font-['Open Sans'] mb-4"
          >
            New Lodging
          </div>
          <div
            v-if="lodgingByIdData"
            class="text-sky-600 text-4xl font-bold font-['Open Sans'] mb-4"
          >
            Edit Lodging
          </div>
        </div>
        <!--head-->

        <div class="flex flex-row w-full mt-2">
          <!--form-->
          <AddEditFormVue
            :lodgingByIdData="lodgingByIdData"
            @changePage="changePage"
            @handleAddLodging="handleAddLodging"
            @handleEditLodging="handleEditLodging"
            :types="types"
            :authorId="authorId"
          />
          <!--form-->

          <!--image-->
          <div v-if="!lodgingByIdData" class="w-1/2 mr-40 grid content-center">
            <img class="w-72 h-auto mx-auto" src="../assets/blue-house.png" />
            <div
              class="text-center text-zinc-500 text-xl font-normal font-['Open Sans'] px-16 mt-8"
            >
              Ready to wow guests? Fill out the form with your lodging's details. Let's create an
              irresistible experience!
            </div>
          </div>
          <div v-if="lodgingByIdData" class="w-1/2 grid content-center">
            <img class="w-96 h-96 object-cover mx-auto rounded-xl" :src="lodgingByIdData.imgUrl" />
          </div>
          <!--image-->
        </div>
      </div>
      <!--primary section-->
    </div>
    <!--Add new lodging-->
  </section>
</template>

<style></style>
