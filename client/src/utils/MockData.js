const restaurantList = [
  {
    id:1,
    name: "Burger King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliBDv4W19LW4JfxNyQd4oeGgsk6OB6FXa0h02ayeHdHdMgQQuPExitsG2Z1CjGLDwoIU&usqp=CAU",
    rating: "3.5",
    cuisine: "Fast food"
  },

  {
    id:2,
    name: "Pizza Hut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGOLLy5-baAGL8fEJhLPjQHT6toQXrwxIfWBU8SD-Syx8l_LHwOA2bdCMM5QtdrT3CE&usqp=CAU",
    rating: "3.3",
    cuisine: "Italian"
  },

  {
    id:3,
    name: "Biryani house",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRncllL-nbFgzAQzKnogfBFwsFvkVW9qQzoa7RHqeqRQ32LvEU1plWdKDfbVxp4ZDMzk&usqp=CAU",
    rating: "3.5",
    cuisine: "Italian"
  },

  {
    id:4,
    name: "Sushi express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2AUFq6KJH4gtXw5mHsFDRbBZA5gQXIHi2J_XDKggaq83OATV5tQPswAVc7IrHkJhdvc&usqp=CAU",
    rating: "3.7",
    cuisine: "Italian"
  },

  {
    id:5,
    name: "Sushi express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2AUFq6KJH4gtXw5mHsFDRbBZA5gQXIHi2J_XDKggaq83OATV5tQPswAVc7IrHkJhdvc&usqp=CAU",
    rating: "3.3",
    cuisine: "Italian"
  },

  {
    id:6,
    name: "Biryani house",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRncllL-nbFgzAQzKnogfBFwsFvkVW9qQzoa7RHqeqRQ32LvEU1plWdKDfbVxp4ZDMzk&usqp=CAU",
    rating: "3.1",
    cuisine: "Italian"
  },

  {
    id:7,
    name: "Pizza Hut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGOLLy5-baAGL8fEJhLPjQHT6toQXrwxIfWBU8SD-Syx8l_LHwOA2bdCMM5QtdrT3CE&usqp=CAU",
    rating: "4.3",
    cuisine: "Italian"
  },

  {
    id:8,
    name: "Burger King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliBDv4W19LW4JfxNyQd4oeGgsk6OB6FXa0h02ayeHdHdMgQQuPExitsG2Z1CjGLDwoIU&usqp=CAU",
    rating: "3.5",
    cuisine: "Fast food"
  },

   {
    id:9,
    name: "Biryani house",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRncllL-nbFgzAQzKnogfBFwsFvkVW9qQzoa7RHqeqRQ32LvEU1plWdKDfbVxp4ZDMzk&usqp=CAU",
    rating: "3.8",
    cuisine: "Italian"
  },

  
   {
    id:10,
    name: "Pizza Hut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGOLLy5-baAGL8fEJhLPjQHT6toQXrwxIfWBU8SD-Syx8l_LHwOA2bdCMM5QtdrT3CE&usqp=CAU",
    rating: "3.3",
    cuisine: "Italian"
  },
  
  {
    id:11,
    name: "Burger King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliBDv4W19LW4JfxNyQd4oeGgsk6OB6FXa0h02ayeHdHdMgQQuPExitsG2Z1CjGLDwoIU&usqp=CAU",
    rating: "3.5",
    cuisine: "Fast food"
  },

   {
    id:12,
    name: "Sushi express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2AUFq6KJH4gtXw5mHsFDRbBZA5gQXIHi2J_XDKggaq83OATV5tQPswAVc7IrHkJhdvc&usqp=CAU",
    rating: "3.6",
    cuisine: "Italian"
  },

  {
    id:13,
    name: "Burger King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliBDv4W19LW4JfxNyQd4oeGgsk6OB6FXa0h02ayeHdHdMgQQuPExitsG2Z1CjGLDwoIU&usqp=CAU",
    rating: "3.5",
    cuisine: "Fast food"
  },

  {
    id:14,
    name: "Pizza Hut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGOLLy5-baAGL8fEJhLPjQHT6toQXrwxIfWBU8SD-Syx8l_LHwOA2bdCMM5QtdrT3CE&usqp=CAU",
    rating: "3.3",
    cuisine: "Italian"
  },

  {
    id:15,
    name: "Biryani house",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRncllL-nbFgzAQzKnogfBFwsFvkVW9qQzoa7RHqeqRQ32LvEU1plWdKDfbVxp4ZDMzk&usqp=CAU",
    rating: "3.5",
    cuisine: "Italian"
  },

  {
    id:16,
    name: "Sushi express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2AUFq6KJH4gtXw5mHsFDRbBZA5gQXIHi2J_XDKggaq83OATV5tQPswAVc7IrHkJhdvc&usqp=CAU",
    rating: "4.7",
    cuisine: "Italian"
  } , 

  {
    id:17,
    name: "Sushi express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2AUFq6KJH4gtXw5mHsFDRbBZA5gQXIHi2J_XDKggaq83OATV5tQPswAVc7IrHkJhdvc&usqp=CAU",
    rating: "4.3",
    cuisine: "Italian"
  },

  {
    id:18,
    name: "Biryani house",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRncllL-nbFgzAQzKnogfBFwsFvkVW9qQzoa7RHqeqRQ32LvEU1plWdKDfbVxp4ZDMzk&usqp=CAU",
    rating: "4.6",
    cuisine: "Italian"
  },

  {
    id:19,
    name: "Pizza Hut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGOLLy5-baAGL8fEJhLPjQHT6toQXrwxIfWBU8SD-Syx8l_LHwOA2bdCMM5QtdrT3CE&usqp=CAU",
    rating: "4.3",
    cuisine: "Italian"
  },

  {
    id:20,
    name: "Burger King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliBDv4W19LW4JfxNyQd4oeGgsk6OB6FXa0h02ayeHdHdMgQQuPExitsG2Z1CjGLDwoIU&usqp=CAU",
    rating: "4.5",
    cuisine: "Fast food"
  }
]


export default restaurantList;





