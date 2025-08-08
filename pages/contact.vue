<template>
  <div class="min-h-screen relative">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 min-h-screen items-center">
      <div class="md:col-span-1 relative">
        <img
          src="/img/klaim.jpg"
          alt=""
          class="w-full min-h-screen h-full object-cover"
        />
        <h1
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-6xl font-bold text-white"
        >
          Contact
        </h1>
      </div>
      <div class="md:col-span-2 lg:col-span-1">
        <div class="p-6 lg:p-10">
          <form @submit.prevent="submit" class="md:pt-16 max-w-[480px] mx-auto">
            <p>Contact us, please fill out the form below.</p>
            <div class="flex flex-col gap-5">
              <input type="text" v-model="form.name" placeholder="Name" class="input" />
              <input type="email" v-model="form.email" placeholder="Email" class="input" />
              <input type="text" v-model="form.phone" placeholder="Phone" class="input" />
              <input type="text" v-model="form.company" placeholder="Company" class="input" />
              <textarea
                v-model="form.message"
                placeholder="Message"
                class="input"
                rows="4"
              ></textarea>
              <button type="submit" class="btn cursor-pointer flex items-center gap-2">
                Send <icon v-if="isLoading" name="eos-icons:loading" class="text-xl" /> <icon v-else name="ri:send-plane-fill" class="text-xl" /> 
              </button>
              <p v-if="statusMessage" class="text-green-600">{{ statusMessage }}</p>
              <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>

            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="py-20 bg-gray-100">
      <container>
        <div class="flex flex-col gap-5">
          <div class="bg-white rounded-xl border border-gray-200 p-6 lg:p-10">
            Members of APPARINDO : 121-2005/APPARINDO/2017 (APPARINDO: The Association of
            Indonesia Insurance and Reinsurance Brokers)
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-6 lg:p-10">
            Company License: Keputusan Menteri Keuangan R.I No.:KEP-365/KM.5/2005, Tanggal 31 Oktober 2005
          </div>
        </div>
      </container>
    </section>
  </div>
</template>

<script lang="ts" setup>
const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const statusMessage = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const submit = async () => {
  // Reset pesan sebelumnya
  statusMessage.value = "";
  errorMessage.value = "";

  // Validasi dasar
  if (!form.name || !form.email || !form.message) {
    errorMessage.value = "Name, email, and message are required.";
    return;
  }

  isLoading.value = true;

  try {
    const htmlMessage = `
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Phone:</strong> ${form.phone}</p>
      <p><strong>Company:</strong> ${form.company}</p>
      <p><strong>Message:</strong><br/>${form.message.replace(/\n/g, '<br/>')}</p>
    `;

    const res = await $fetch("/api/send-email", {
      method: "POST",
      body: {
        to: "hallo.anewahyudi@gmail.com",
        subject: "Pesan dari situs kamu",
        message: htmlMessage,
      },
    });

    statusMessage.value = "Email berhasil dikirim!";
    // Reset form
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });
  } catch (error) {
    console.error("Send email error:", error);
    errorMessage.value = "Gagal mengirim email. Silakan coba lagi nanti.";
  } finally {
    isLoading.value = false;
  }
};

</script>
