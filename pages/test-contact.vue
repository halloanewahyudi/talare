<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const  company = ref('')
const message = ref('')
const status = ref('')

const sendMessage = async () => {
  status.value = 'Mengirim...'
  try {
    const baseUrl = useRuntimeConfig().public.baseUrl;
    const res = await fetch(baseUrl +'/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        message: message.value
      })
    })

    const data = await res.json()
    if (res.ok) {
      status.value = data.message
      name.value = ''
      email.value = ''
      phone.value = ''
      company.value = ''
      message.value = ''
    } else {
      status.value = data.message || 'Gagal mengirim pesan'
    }
  } catch (err) {
    status.value = 'Terjadi error saat mengirim pesan'
  }
}
</script>

<template>
  <div>
    <h1>Hubungi Kami</h1>
    <form @submit.prevent="sendMessage">
      <input v-model="name" type="text" placeholder="Nama" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="phone" type="text" placeholder="Nomor Telepon" />
      <input v-model="company" type="text" placeholder="Perusahaan" />
    
      <textarea v-model="message" placeholder="Pesan" required></textarea>
      <button type="submit">Kirim</button>
    </form>
    <p v-if="status" class="mt-4">{{ status }}</p>
  </div>
  </template> 