export const useMenu = () => {
  const menus = ref([
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
      children: [
        {
          name: 'Company Overview',
          path: '/about/company-overview',
        },
        {
          name: 'Our Management',
          path: '/about/management',
        }
      ]
    },
     {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Clients & Strategic Pratners',
      path: '/clients',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ])
  return {
    menus
  }
}
