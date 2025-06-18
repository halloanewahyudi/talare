<template>
  <div class="bg-white bg-[url('/img/footer-talare.jpg')] bg-cover bg-right">
    <div class="bg-gradient-to-r from-blue-600 to-primary py-5">
      <Container>
        <h2 class="text-xl lg:text-2xl text-white">
          PT. TALA REINSURANCE BROKERS & CONSULTANTS
        </h2>
      </Container>
    </div>
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 text-sm py-10">

        <div class="flex flex-col gap-3"> <!-- col 1 -->
          <h4 class="text-lg font-semibold mb-1">Address</h4>
          <div class="flex gap-1"> 
            <Icon name="simple-line-icons:location-pin" class="text-xl" />
            <p class="text-sm">
              Graha Mustika Ratu, 6th Floor Jl. Gatot Subroto Kav. 74-75 Jakarta 12870
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-3"><!--  col 2 -->
          <h4 class="text-lg font-semibold ">Contact</h4>
          <div class="flex gap-1"> 
            <Icon name="simple-line-icons:call-in" class="text-xl" />
            <p class="text-sm">
              +6221 830 6663 
            </p>
          </div>
          <div class="flex gap-1"> 
            <Icon name="cil:fax" class="text-xl" />
            <p class="text-sm">
              +6221 830 6662
            </p>
          </div>
           <div class="flex gap-1"> 
            <Icon name="si:mail-line" class="text-xl" />
            <p class="text-sm">
             talare@talare.co.id
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="/img/logo.png" alt="" class="h-16">
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
