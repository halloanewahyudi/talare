    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger"; // Example: import a GSAP plugin

    export default defineNuxtPlugin((nuxtApp) => {
      // Register GSAP plugins, ensuring they only run on the client
      if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
        // Register other plugins here as needed
      }

      // Provide GSAP and its registered plugins globally
      return {
        provide: {
          gsap: {
            gsap,
            ScrollTrigger, // Provide ScrollTrigger if registered
            // Add other provided plugins here
          },
        },
      };
    });