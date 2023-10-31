<script>
export default {
   props : ['role', 'username'] 
}
</script>
<template>
    <div class="flex flex-row justify-end mr-40 mt-8">
        <div class="mr-4 grid content-center">
          <div class="text-right text-sky-600 text-xl font-semibold font-['Open Sans']">
            {{ username }}
          </div>
          <div class="text-right text-zinc-500 text-lg font-normal font-['Open Sans']">
            {{ role }}
          </div>
        </div>
        <div class="w-16 h-16 rounded-lg">
            <img src="../../public/profile.png" class="rounded-lg" alt="">
        </div>
      </div>
</template>