  <template>
    <div>
      <Navbar class="mb-10 hidden lg:block" />
      <MobileNavbar class="lg:hidden" />
      <div class="min-h-screen">
      <slot />
      </div>
      
      <Footer />
    </div>
  </template>

  <script lang="ts" setup></script>

  <style></style>
