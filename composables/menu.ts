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
          name: 'Why Choose Us',
          path: '/about/why-choose-us',
        },
         {
          name: 'What We Do',
          path: '/about/what-we-do',
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
      children:[

        {
          name:'Facultative Reinsurance',
          path: productMenu.value[0].path
        },
        {
          name:'Treaty Reinsurance',
          path:'/treaty'
        },
        {
          name:'Joint Placement',
          path:'/joint-placement'
        }
      ],
      
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Clients & Strategic Partners',
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
