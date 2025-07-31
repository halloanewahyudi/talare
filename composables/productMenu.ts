export const useProductMenu = () => {
  const productMenu = ref([
    {
      name: 'Energy Insurance',
      path: '/products/energy-insurance',
      slug: 'energy-insurance',
    },
    {
      name: 'Property Insurance',
      path: '/products/fire-property-insurance',
      slug: 'fire-property-insurance',
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
      name: 'Suretyship Insurance',
      path: '/products/suretyship-insurance',
      slug: 'suretyship-insurance',
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
      name: ' Miscellaneous Insurance',
      path: '/products/miscellaneous-insurance',
      slug: 'miscellaneous-insurance',
    },
    {
      name: 'Health Insurance',
      path: '/products/health-insurance',
      slug: 'health-insurance',
    },
    {
      name: 'Life Insurance',
      path: '/products/life-insurance',
      slug: 'life-insurance',
    },
  ])

  return {
    productMenu,
  }
}
