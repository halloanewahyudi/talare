export const useMenu = () => {

  const {productMenu} = useProductMenu();
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
          path: '/about/vision-mission',
        },
        {
          name: 'Our Management',
          path: '/about/management',
        },
        {
          name: 'Our Team',
          path: '/about/team',
        }
      ]
    },
     {
      name: 'Products',
      path: productMenu.value[0].path,
    },
    {
      name: 'Services',
      path: '#',
    },
    {
      name: 'Clients & Strategic Partners',
      path: '#',
    },
    {
      name: 'Gallery',
      path: '#',
    },
    {
      name: 'Contact',
      path: '#',
    },
  ])
  return {
    menus
  }
}
