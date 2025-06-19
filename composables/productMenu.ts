export const useProductMenu = () => {
  const productMenu = ref([
    {
      name: 'Life Insurance',
      path: '/products/life-insurance',
      slug: 'life-insurance',
    },
    {
      name: 'Property Insurance',
      path: '/products/property-insurance',
      slug: 'property-insurance',
    },
    {
      name: 'Engineering Insurance',
      path: '/products/engineering-insurance',
      slug: 'engineering-insurance',
    },
    {
      name: 'Marine Insurance',
      path: '/products/marine-insurance',
      slug: 'marine-insurance',
    },
    {
      name: 'Aviation Insurance',
      path: '/products/aviation-insurance',
      slug: 'aviation-insurance',
    },
    {
      name: 'Liability Insurance',
      path: '/products/liability-insurance',
      slug: 'liability-insurance',
    },
    {
      name: 'Financial Insurance',
      path: '/products/financial-insurance',
      slug: 'financial-insurance',
    },
     {
      name: 'General Accident Insurance',
      path: '/products/general-accident-insurance',
      slug: 'general-accident-insurance',
    },
    {
      name: 'Oil and Gas Insurance',
      path: '/products/oil-and-gas-insurance',
      slug: 'oil-and-gas-insurance',
    },
    {
      name: 'Terrorism & Sabotage',
      path: '/products/terrorism-and-sabotage',
      slug: 'terrorism-and-sabotage',
    },
  ])

  return {
    productMenu,
  }
}
