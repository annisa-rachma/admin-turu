<script>
export default {
  emits: ['handleLoginGoogle'],
  data() {
    return {
      response : ''
    }
  },
  methods: {
    callback(response) {
      this.response = response
      this.$emit('handleLoginGoogle', this.response)
    },
    handleLoginGoogle(response) {
      this.$emit('handleLoginGoogle', response)
    }
  }
}
</script>

<template>
  <GoogleLogin
    :callback="callback"
    v-on:submit.prevent="handleLoginGoogle"
    class="w-full h-12 mt-4 rounded-lg bg-white border border-zinc-200 text-xl text-white grid content-center "
    id="googleLogin"
  />
  
  
</template>


