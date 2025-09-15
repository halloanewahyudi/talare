export const useMenu = () => {

  const { productMenu } = useProductMenu();
  const menus = ref([
    {
      id:'home',
      name: 'Home',
      path: '/',

    },
    {
      id:'about',
      name: 'About',
      path: '#',
      children: [
        {
          name: 'About Talare',
          path: '/about'
        },
        {
          name: 'Vision & Mission',
          path: '/about/vision-mission'
        },
        {
          name: 'Why Choose Us',
          path: '/about/why-choose-us'
        },
        {
          name: 'What We Do',
          path: '/about/what-we-do'
        },
        {
          name: 'Our Management',
          path: '/about/management'
        },
        {
          name: 'Our Team',
          path: '/about/team'
        }
      ]
    },
    {
      id:'services',
      name: 'Services',
      path: '/services',
    },
    {
      id:'products',
      name: 'Products',
      path: '#',
      children: [
          {
          name: 'Treaty Reinsurance',
          path: '/treaty'
        },
        {
          name: 'Facultative Reinsurance',
          path: productMenu.value[0].path
        },    
        {
          name: 'Joint Placement',
          path: '/joint-placement'
        }
      ],

    },

    {
      id:'clients',
      name: 'Clients & Strategic Partners',
      path: '/clients',
    },
    {
      id:'news',
      name: 'News',
      path: '/news',
    },
    {
      id:'gallery',
      name: 'Gallery',
      path: '/gallery',
    },
    {
      id:'contact',
      name: 'Contact Us',
      path: '/contact',
    },
  ])
  return {
    menus
  }
}
