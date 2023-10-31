<script>
import SubmitButton from './form/SubmitButton.vue'

export default {
  emits: ['handleRegister'],
  components: {
    SubmitButton,
    
  },
  data() {
    return {
      form : {
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  methods: {
    handleRegister() {
      this.$emit('handleRegister', this.form)
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleRegister" action="" class="w-1/2 mt-8">
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Username</label>
      <input
        v-model="form.username"
        type="text"
        placeholder="Enter your username..."
        class="w-96 h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Email</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="Enter your email..."
        class="w-96 h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Password</label>
      <input
        v-model="form.password"
        type="password"
        placeholder="Enter your password..."
        class="w-96 h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']"
        >Phone number</label
      >
      <input
        v-model="form.phoneNumber"
        type="text"
        placeholder="Enter your phone number..."
        class="w-96 h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label for="" class="text-sky-600 text-xl font-semibold font-['Open Sans']">Address</label>
      <input
        v-model="form.address"
        type="text"
        placeholder="Enter your address..."
        class="w-96 h-12 pl-4 mt-1 bg-white rounded-lg border border-zinc-400 400 text-sky-600 text-xl"
      />
    </div>
    <SubmitButton name="Sign Up" />
    
  </form>
</template>
