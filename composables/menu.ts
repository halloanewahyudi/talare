export const useMenu = () => {
  const menus = ref([
    {
      name: 'Home',
      path: '/',
    
    },
    {
      name: 'About',
      path: '#',
      children: [
        {
          name: 'About Talare',
          path: '/about',
        },
        {
          name: 'Vision & Mission',
          path: '/vision-mission',
        },
        {
          name: 'Our Management',
          path: '/management',
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
