<template>
  <div class="min-h-screen relative">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 min-h-screen items-center">
      <!-- Left section (Image + Title) -->
      <div class="md:col-span-1 relative">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/75 to-transparent"></div>
        <img
          :src="contact?.featured_image"
          alt="Contact banner"
          class="w-full min-h-screen h-full object-cover"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 class="text-4xl lg:text-6xl font-bold">
            {{ contact?.title }}
          </h1>
          <p v-if="contact?.acf?.sub_title" class="text-xl mt-3">
            {{ contact?.acf?.sub_title }}
          </p>
        </div>
      </div>

      <!-- Right section (Form) -->
      <div class="md:col-span-2 lg:col-span-1">
        <div class="p-6 lg:p-10">
          <form @submit.prevent="submit" class="md:pt-16 max-w-[480px] mx-auto space-y-5">
            <p>Contact us, please fill out the form below.</p>
            
            <input v-model="form.name" type="text" placeholder="Name" class="input" />
            <input v-model="form.email" type="email" placeholder="Email" class="input" />
            <input v-model="form.phone" type="text" placeholder="Phone" class="input" />
            <input v-model="form.company" type="text" placeholder="Company" class="input" />
            <textarea v-model="form.message" placeholder="Message" class="input" rows="4"></textarea>
            
            <button type="submit" class="btn cursor-pointer flex items-center gap-2">
              <span>Send</span>
              <icon v-if="isLoading" name="eos-icons:loading" class="text-xl animate-spin" />
              <icon v-else name="ri:send-plane-fill" class="text-xl" />
            </button>

            <!-- Feedback -->
            <p v-if="statusMessage" class="text-green-600">{{ statusMessage }}</p>
            <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>

    <!-- Status Section -->
    <section class="py-20 bg-gray-100">
      <container>
        <div class="flex flex-col gap-5">
          <div
            v-for="(value, index) in contact?.acf?.status"
            :key="index"
            class="bg-white rounded-xl border border-gray-200 p-6 lg:p-10"
          >
            {{ value.item }}
          </div>
        </div>
      </container>
    </section>
  </div>
</template>

<script setup lang="ts">
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const form = ref<ContactForm>({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const statusMessage = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const resetForm = () => {
  form.value = { name: "", email: "", phone: "", company: "", message: "" };
};

const submit = async () => {
  statusMessage.value = "";
  errorMessage.value = "";

  // Basic validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = "Name, email, and message are required.";
    return;
  }

  isLoading.value = true;

  try {
    const htmlMessage = `
      <p><strong>Name:</strong> ${form.value.name}</p>
      <p><strong>Email:</strong> ${form.value.email}</p>
      <p><strong>Phone:</strong> ${form.value.phone}</p>
      <p><strong>Company:</strong> ${form.value.company}</p>
      <p><strong>Message:</strong><br/>${form.value.message.replace(/\n/g, "<br/>")}</p>
    `;

    await $fetch("/api/send-email", {
      method: "POST",
      body: {
        to: "prowebindo@gmail.com",
        subject: "Pesan dari situs kamu",
        message: htmlMessage,
      },
    });

    statusMessage.value = "Email berhasil dikirim!";
    resetForm();
  } catch (error) {
    console.error("Send email error:", error);
    errorMessage.value = "Gagal mengirim email. Silakan coba lagi nanti.";
  } finally {
    isLoading.value = false;
  }
};

// Fetch contact data
const baseUrl = useRuntimeConfig().public.baseUrl;
const { data: contact } = await useFetch(`${baseUrl}/api/v1/content/contact`);
</script>
