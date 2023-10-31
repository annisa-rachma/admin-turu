<script>
import SubmitButton from './form/SubmitButton.vue'
import GoogleLoginButton from './form/GoogleLoginButton.vue'

export default {
  emits: ['handleLogin', 'handleLoginGoogle'],
  components: {
    SubmitButton,
    GoogleLoginButton
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      // console.log(this.form)
      this.$emit('handleLogin', this.form)
    },
    handleLoginGoogle(response) {
      this.$emit('handleLoginGoogle', response)
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="handleLogin" id="form-login" class="w-1/2 mt-8">
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
    <SubmitButton name="Log In" />
  </form>

  <GoogleLoginButton @handleLoginGoogle="handleLoginGoogle" class=" "/>

</template>
