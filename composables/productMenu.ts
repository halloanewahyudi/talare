export const useProductMenu = () => {
  const productMenu = ref([
    {
      name: 'Property Insurance',
      path: '/products/fire-property-insurance',
      slug: 'fire-property-insurance',
    },
    {
      name: 'Marine Insurance',
      path: '/products/marine-insurance',
      slug: 'marine-insurance',
    },
    {
      name: 'Energy Insurance',
      path: '/products/energy-insurance',
      slug: 'energy-insurance',
    },
    {
      name: 'Engineering Insurance',
      path: '/products/engineering-insurance',
      slug: 'engineering-insurance',
    },
    {
      name: 'Liability Insurance',
      path: '/products/liability-insurance',
      slug: 'liability-insurance',
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
    {
      name: 'Credit Insurance',
      path: '/products/credit-insurance',
      slug: 'credit-insurance',
    },
    {
      name: 'Financial Insurance',
      path: '/products/financial-insurance',
      slug: 'financial-insurance',
    },
    {
      name: 'Suretyship Insurance',
      path: '/products/suretyship-insurance',
      slug: 'suretyship-insurance',
    },
    {
      name: ' Miscellaneous Insurance',
      path: '/products/miscellaneous-insurance',
      slug: 'miscellaneous-insurance',
    },


  ])

  return {
    productMenu,
  }
}
