<template>
  <div class="p-6 lg:p-10">
  
     <form action="" class=" md:pt-16 max-w-[480px] mx-auto">
     <p>Contact us, please fill out the form below.</p>
     <div class="flex flex-col gap-5">
      <input type="text" v-model="form.name" placeholder="Name" class="input">
      <input type="text" v-model="form.email" placeholder="Email" class="input">
      <input type="text" v-model="form.phone" placeholder="Phone" class="input">
      <input type="text" v-model="form.company" placeholder="Company" class="input">
      <textarea name="" id="" cols="30" rows="4" v-model="form.message" placeholder="Message" class="input"></textarea>
      <button class="btn cursor-pointer flex items-center gap-2">Send <icon name="ri:send-plane-fill" class="text-xl" /></button>
     </div>
     </form>
  </div>
</template>

<script lang="ts" setup>
 definePageMeta({
   layout: 'layout-contact',
 })

 const form = reactive({
   name: '',
   email: '',
   phone: '',
   company: '', 
   message: ''
 })
</script>

<style>

</style>