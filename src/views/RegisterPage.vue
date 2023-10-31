<script>
import RegisterForm from '../components/RegisterForm.vue'

export default {
  emits : ['changePage','handleRegister'],
  components : {
    RegisterForm
  },
  methods : {
    changePage(page) {
      this.$emit('changePage', page)
    },
    handleRegister(form) {
      this.$emit('handleRegister', form)
    }
  }
}
</script>

<template>
  <section class="bg-slate-100" id="register-section">
    <!--sign up-->
    <div class="flex flex-col w-full h-full">
      <!--primary section-->
      <div class="gap-8 flex flex-row">
        <div class="w-1/2 grid place-content-center">
            <div class=" text-sky-600 text-4xl font-semibold font-['Open Sans']">
              Sign Up and Enjoy!
            </div>
            
            <RegisterForm @handleRegister="handleRegister"/>

            <div class="text-md text-center mt-8 font-['Open Sans']">
              <p class="text-zinc-500">Already have an account? <a @click.prevent="changePage('login-section')" href="" class="text-sky-600">Sign In</a></p>
            </div>
        </div>
        <div class="w-1/2 h-720px">
          <img src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="">
        </div>
      </div>
    </div>
    <!--sign up-->
  </section>
</template>

<style></style>