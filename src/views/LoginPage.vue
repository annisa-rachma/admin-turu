<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  emits: ['handleLogin', 'changePage', 'handleLoginGoogle'],
  components: {
    LoginForm
  },
  methods: {
    handleLogin(form) {
      this.$emit('handleLogin', form)
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
    handleLoginGoogle(response) {
      this.$emit('handleLoginGoogle', response)
    }
  }
}
</script>

<template>
  <section class="bg-slate-100" id="login-section">
    <div class="flex flex-col w-full h-full">
      <div class="gap-8 flex flex-row">
        <!--login section-->
        <div class="w-1/2 grid place-content-center">
          <div class="text-sky-600 text-4xl font-semibold font-['Open Sans']">Welcome Back!</div>

          <LoginForm @handleLogin="handleLogin" @handleLoginGoogle="handleLoginGoogle"/>

          <div class="text-md text-center mt-8 font-['Open Sans']">
            <p class="text-zinc-500">
              Don’t have an account? <a @click.prevent="changePage('register-section')" href="" class="text-sky-600">Sign Up</a>
            </p>
          </div>
        </div>
        <!--login section-->

        <!--picture-->
        <div class="w-1/2 h-720px">
          <img
            src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            alt=""
          />
        </div>
        <!--picture-->
      </div>
    </div>
  </section>
</template>

<style></style>
