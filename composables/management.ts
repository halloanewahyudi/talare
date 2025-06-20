export const useManagement = () => {
 const management = ref([
   {
    id:1,
    name:'Steven le ',
    position:'President Director',
    image:'/img/bod1.jpg',
    bio:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit.</p>

    <p> Delectus optio, maxime animi incidunt quisquam dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. </p>

    <p>Consectetur adipisicing elit. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. Delectus optio, maxime animi incidunt quisquam dolore.</p>`,
   },
   {
    id:2,
    name:'Jhon Doe',
    position:'Director',
   image:'/img/bod1.jpg',
    bio:`<p>Consectetur adipisicing elit. Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. Delectus optio, maxime animi incidunt quisquam dolore.</p>
    
    <p>Nulla sed libero ac nibh faucibus ultrices ut sit amet justo. Nullam vestibulum eros tortor, a ullamcorper justo ultrices non. Nullam fringilla euismod porttitor. Mauris eget commodo velit, ut aliquam ex. Pellentesque mollis, lacus eu imperdiet commodo, sapien odio viverra nisl, mollis congue urna magna sed sapien. Aenean venenatis consectetur nisi vel rutrum. Pellentesque eget arcu ipsum. </p> 

    <p> Pellentesque tempus tempus interdum. Phasellus at magna eleifend, venenatis felis a, iaculis nunc. Nulla ultricies lorem euismod neque cursus, nec venenatis enim posuere. In ut blandit odio. Integer sodales, nunc a laoreet luctus, lacus tellus vestibulum arcu, et dignissim leo turpis blandit ante. Integer dignissim tristique felis, ut pharetra nulla varius id.</p> `,  
   },
   {
    id:3,
    name:'Doe Hendrik',
    position:'Chief Operating Officer',
   image:'/img/bod1.jpg',
    bio:`<p>Quos sint dicta id minus facilis veritatis laboriosam quia in saepe aut pariatur delectus optio, maxime animi incidunt quisquam dolore. Molestiae, fugit. Delectus optio, maxime animi incidunt quisquam dolore.</p>
    
    <p>Morbi vestibulum commodo orci, ut auctor tellus dictum mollis. Suspendisse semper enim at congue laoreet. Sed posuere interdum tellus, eget sagittis tellus lacinia vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tincidunt consectetur sodales. Nam porta leo ipsum, ac tempus magna bibendum nec. Sed interdum interdum urna, eu sollicitudin risus pharetra in. Suspendisse pellentesque vehicula porta. Nam venenatis faucibus enim at blandit.
    </p>
    
    <p>Suspendisse in massa turpis. Ut pulvinar, nisi quis lacinia bibendum, neque urna blandit massa, vitae lacinia ligula risus eu nunc. Ut posuere aliquet ante, id facilisis mi fringilla quis. Vestibulum luctus fermentum tortor. Integer nunc magna, porttitor ut lorem eget, vehicula molestie dolor. Aenean nisl erat, blandit sit amet pellentesque at, luctus id dui. Phasellus magna nisl, aliquet eu quam non, sagittis aliquam ex. Nam posuere odio id vestibulum varius.</p>`,  
   }
   

 ])

 return {
   management
  }
}
