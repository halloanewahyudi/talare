export const useMenu = () => {

  const { productMenu } = useProductMenu();
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
      name: 'Services',
      path: '/services',
    },
    {
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
      name: 'Clients & Strategic Partners',
      path: '/clients',
    },
    {
      name: 'News',
      path: '/news',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
  ])
  return {
    menus
  }
}
