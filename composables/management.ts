export const useManagement = () => {
 const management = ref([
   {
    id:1,
    name:'Steven le ',
    position:'President Director',
    image:'/img/avatar.png',
    bio:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit.</p>`,
   },
   {
    id:2,
    name:'Jhon Doe',
    position:'Director',
   image:'/img/avatar.png',
    bio:`<p>Consectetur adipisicing elit. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. Delectus optio, maxime animi incidunt quisquam dolore.</p>`,  
   },
   {
    id:3,
    name:'Doe Hendrik',
    position:'Chief Operating Officer',
   image:'/img/avatar.png',
    bio:`<p>Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. Delectus optio, maxime animi incidunt quisquam dolore.</p>`,  
   }
   

 ])

 return {
   management
  }
}
