<script>
export default {
  emits: ['handleAddLodging', 'changePage', 'handleEditLodging'],
  props: ['types', 'authorId', 'lodgingByIdData'],
  data() {
    return {
      form: {
        name: '',
        location: '',
        typeId: '',
        facility: '',
        roomCapacity: '',
        price: '',
        imgUrl: '',
        authorId: this.authorId
      }
    }
  },
  methods: {
    handleAddEditLodging() {
      if (this.lodgingByIdData) {
        this.$emit('handleEditLodging', this.form, this.lodgingByIdData.id)
      } else {
        this.$emit('handleAddLodging', this.form)
      }
    },
    changePage(page, lodgingById) {
      this.$emit('changePage', page, lodgingById)
    }
  },
  created() {
    if (this.lodgingByIdData) {
      // console.log(this.lodgingByIdData)
      this.form = {
        name: this.lodgingByIdData.name,
        location: this.lodgingByIdData.location,
        typeId: this.lodgingByIdData.typeId,
        facility: this.lodgingByIdData.facility,
        roomCapacity: this.lodgingByIdData.roomCapacity,
        price: this.lodgingByIdData.price,
        imgUrl: this.lodgingByIdData.imgUrl,
        authorId: this.authorId
      }
    }
  }
}
</script>
<template>
  <form @submit.prevent="handleAddEditLodging" action="" class="w-1/2">
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
        placeholder="Enter lodging name..."
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Location</label>
      <input
        v-model="form.location"
        type="text"
        class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
        placeholder="Enter lodging location..."
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Type</label>
      <select
        v-model="form.typeId"
        name=""
        id=""
        class="w-full h-12 pl-4 pr-4 mt-1 text-sky-600 text-xl font-['Open Sans'] bg-white rounded-lg border border-zinc-400 400 text-xl font-normal font-['Open Sans']"
      >
        <option value="" selected disabled>Select</option>
        <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
      </select>
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Facility</label>
      <input
        v-model="form.facility"
        type="text"
        class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
        placeholder="Enter lodging facility..."
      />
    </div>
    <div class="flex flex-row mt-2 w-full gap-2">
      <div class="flex flex-col w-1/2">
        <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']"
          >Room Capacity</label
        >
        <input
          v-model="form.roomCapacity"
          type="number"
          class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
          placeholder="Enter capacity..."
        />
      </div>
      <div class="flex flex-col w-1/2">
        <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Price</label>
        <input
          v-model="form.price"
          type="number"
          class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 text-sky-600 text-xl"
          placeholder="Enter price..."
        />
      </div>
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Image</label>
      <input
        v-model="form.imgUrl"
        type="text"
        class="w-full h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 text-sky-600 text-xl"
        placeholder="Enter image url..."
      />
    </div>
    <div class="flex flex-row mt-6 w-full gap-2">
      <div
        @click.prevent="changePage('lodgings-section')"
        class="w-full h-12 bg-slate-100 text-xl text-sky-600 rounded-lg border grid content-center border-sky-600 hover:bg-sky-100"
      >
        <button type="" class="">Cancel</button>
      </div>
      <div
        class="w-full h-12 bg-sky-600 text-xl text-white rounded-lg grid content-center hover:bg-sky-700"
      >
        <button type="submit" class="">Submit</button>
      </div>
    </div>
  </form>
</template>
