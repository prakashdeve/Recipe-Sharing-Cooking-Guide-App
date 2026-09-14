import kachori from "../assets/kachori.jpg";
import puri from "../assets/puri.jpg";
import chapati from "../assets/chapati.jpg";
import dalChawal from "../assets/dal-chawal.jpg";
import React from "react";

const recipes =[
  {
    id: 1,
    title: "Indian",
    time: "35 min",
    difficulty: "Easy",
    servings: 3,
    image: dalChawal,
    description: "Simple and comforting Indian dal chawal made with flavorful lentils and steamed rice.",
    ingredients: [
      "1 cup rice",
      "1 cup yellow dal",
      "1 onion",
      "1 tomato",
      "2 green chillies",
      "1 teaspoon turmeric",
      "1 teaspoon cumin seeds",
      "1 tablespoon ghee or oil",
      "Salt to taste",
      "2.5 cups water"
    ],
    instructions: [
      "Wash the rice and dal properly.",
      "Cook the dal with turmeric, salt and water until soft.",
      "Cook the rice separately until soft and fluffy.",
      "Heat ghee or oil in a pan.",
      "Add cumin seeds, onion, green chillies and tomato.",
      "Cook until the onion and tomato become soft.",
      "Add the cooked dal and mix well.",
      "Serve hot dal with steamed rice."
    ]
  },

  {
    id: 2,
    title: "Creamy Pasta",
    category: "Italian",
    time: "25 min",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    description: "A delicious creamy pasta recipe that is quick and easy to prepare.",
    ingredients: [
      "200g pasta",
      "1 cup cream",
      "2 cloves garlic",
      "1 tablespoon butter",
      "1/2 cup cheese",
      "Salt",
      "Black pepper"
    ],
    instructions: [
      "Boil pasta according to package instructions.",
      "Heat butter in a pan.",
      "Add garlic and cook for 1 minute.",
      "Add cream and cheese.",
      "Add salt and black pepper.",
      "Mix boiled pasta with the sauce.",
      "Serve hot."
    ]
  },

  {
    id: 3,
    title: "Margherita Pizza",
    category: "Italian",
    time: "35 min",
    difficulty: "Medium",
    servings: 2,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    description: "Classic homemade pizza topped with tomato, mozzarella and fresh basil.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Prepare the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Add fresh basil.",
      "Drizzle olive oil.",
      "Bake until the crust becomes golden.",
      "Serve hot."
    ]
  },

  {
    id: 4,
    title: "Vegetable Salad",
    category: "Healthy",
    time: "10 min",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    description: "Fresh and healthy vegetable salad packed with nutrients.",
    ingredients: [
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Onion",
      "Carrot",
      "Lemon juice",
      "Salt"
    ],
    instructions: [
      "Wash all vegetables.",
      "Chop vegetables into small pieces.",
      "Put everything into a bowl.",
      "Add lemon juice.",
      "Add salt.",
      "Mix well and serve."
    ]
  },

  {
    id: 5,
    title: "Chicken Biryani",
    category: "Indian",
    time: "60 min",
    difficulty: "Medium",
    servings: 4,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
    description: "Aromatic and flavorful chicken biryani made with basmati rice and spices.",
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "2 onions",
      "2 tomatoes",
      "Yogurt",
      "Biryani masala",
      "Ginger garlic paste",
      "Salt"
    ],
    instructions: [

      "Wash and soak the rice.",
      "Marinate the chicken with yogurt and spices.",
      "Fry onions until golden brown.",
      "Cook chicken with spices.",
      "Add partially cooked rice.",
      "Cover and cook on low heat.",
      "Serve hot with raita."
    ]
  },

  {
    id: 6,
    title: "Chocolate Cake",
    category: "Dessert",
    time: "45 min",
    difficulty: "Medium",
    servings: 6,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    description: "Soft and delicious chocolate cake perfect for celebrations.",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup milk",
      "1/2 cup butter",
      "1 teaspoon baking powder"
    ],
    instructions: [
      "Preheat the oven.",
      "Mix flour and cocoa powder.",
      "Add sugar and baking powder.",
      "Add eggs, milk and butter.",
      "Mix until smooth.",
      "Pour into a cake pan.",
      "Bake for 35 minutes."
    ]
  },

  {
    id: 7,
    title: "Masala Dosa",
    category: "Indian",
    time: "30 min",
    difficulty: "Medium",
    servings: 3,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    description: "Crispy South Indian dosa filled with spicy potato masala.",
    ingredients: [
      "Dosa batter",
      "Potatoes",
      "Onion",
      "Green chilli",
      "Mustard seeds",
      "Curry leaves",
      "Salt"
    ],
    instructions: [
      "Prepare potato masala.",
      "Heat a dosa pan.",
      "Spread dosa batter thinly.",
      "Add potato masala.",
      "Cook until crispy.",
      "Fold the dosa.",
      "Serve with chutney and sambar."
    ]
  },

  {
    id: 8,
    title: "Butter Chicken",
    category: "Indian",
    time: "45 min",
    difficulty: "Medium",
    servings: 4,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    description: "Creamy and flavorful Indian butter chicken cooked with aromatic spices.",
    ingredients: [
     "500g chicken",
     "1 cup tomato puree",
     "1/2 cup cream",
     "2 tablespoons butter",
     "Ginger garlic paste",
     "Garam masala",
     "Red chilli powder",
     "Salt"
    ],
    instructions: [
      "Marinate the chicken with yogurt and spices.",
      "Cook the chicken until lightly browned.",
      "Heat butter and add tomato puree.",
      "Add spices and cook the gravy.",
      "Add cream and cooked chicken.",
      "Simmer for 10 minutes.",
      "Serve hot with naan or rice."
   ]
  },

  {
    id: 9,
    title: "Paneer Tikka",
    category: "Indian",
    time: "30 min",
    difficulty: "Easy",
    servings: 3,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    description: "Delicious grilled paneer cubes marinated with yogurt and Indian spices.",
    ingredients: [
      "250g paneer",
      "1/2 cup yogurt",
      "1 capsicum",
      "1 onion",
      "1 tablespoon ginger garlic paste",
      "Tikka masala",
      "Lemon juice",
      "Salt"
    ],
    instructions: [
      "Cut paneer, onion and capsicum into cubes.",
      "Mix yogurt with spices.",
      "Add paneer and vegetables to the marinade.",
      "Keep the mixture for 20 minutes.",
      "Grill or pan-fry until golden.",
      "Serve hot with mint chutney."
   ]
  },

  {
    id: 10,
    title: "Fluffy Pancakes",
    category: "Breakfast",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    description: "Soft and fluffy pancakes perfect for a delicious breakfast.",
    ingredients: [
      "1 cup flour",
      "1 tablespoon sugar",
      "1 teaspoon baking powder",
      "1 egg",
      "3/4 cup milk",
      "2 tablespoons butter",
      "Pinch of salt"
    ],
    instructions: [
      "Mix flour, sugar, baking powder and salt.",
      "Add egg and milk.",
      "Mix until the batter becomes smooth.",
      "Heat a pan and add a little butter.",
      "Pour pancake batter onto the pan.",
      "Cook both sides until golden.",
      "Serve with honey or maple syrup."
    ]
  },

  {
    id: 11,
    title: "Chocolate Brownie",
    category: "Dessert",
    time: "35 min",
    difficulty: "Easy",
    servings: 6,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800",
    description: "Rich, soft and chocolatey brownies that are perfect for dessert.",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup butter",
      "1 teaspoon vanilla extract",
      "1/2 cup chocolate chips"
    ],
    instructions:[
      "Preheat the oven.",
      "Melt the butter and chocolate.",
      "Mix eggs, sugar and vanilla.",
      "Add flour and cocoa powder.",
      "Mix everything together.",
      "Pour the batter into a baking pan.",
      "Bake for 25 minutes.",
      "Cool and cut into pieces."
    ]
  },

  {
    id: 12,
    title: "Paneer Ki Sabzi",
    category: "Indian",
    time: "30 min",
    difficulty: "Easy",
    servings: 3,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    description: "Delicious paneer curry cooked in a rich and flavorful tomato-based gravy.",
    ingredients: [
      "250g paneer",
      "2 tomatoes",
      "1 onion",
      "1 tablespoon ginger garlic paste",
      "1 teaspoon turmeric",
      "1 teaspoon red chilli powder",
      "1 teaspoon garam masala",
      "1 tablespoon oil",
      "Salt to taste"
    ],
    instructions: [
      "Cut the paneer into small cubes.",
      "Heat oil in a pan and lightly fry the paneer.",
      "Add onion and cook until golden.",
      "Add ginger garlic paste and cook for a minute.",
      "Add tomato puree and spices.",
      "Cook the gravy until the oil separates.",
      "Add paneer and a little water.",
      "Cook for 5 to 7 minutes.",
      "Serve hot with chapati or rice."
   ]
  },

  {
    id: 13,
    title: "Chapati",
    category: "Indian",
    time: "25 min",
    difficulty: "Easy",
    servings: 4,
    image: chapati,
    description: "Soft and fresh Indian chapati made with whole wheat flour.",
    ingredients: [
      "2 cups wheat flour",
      "Water as needed",
      "1/2 teaspoon salt",
      "1 teaspoon oil"
    ],
    instructions: [

      "Take wheat flour in a bowl.",
      "Add salt and mix well.",
      "Add water slowly and knead into a soft dough.",
      "Rest the dough for 10 minutes.",
      "Divide the dough into small balls.",
      "Roll each ball into a thin round chapati.",
      "Heat a tawa and cook the chapati on both sides.",
      "Cook directly on the flame for a few seconds if desired.",
      "Serve hot with dal, sabzi or paneer."
    ]
  },

  {
    id: 14,
    title: "Puri",
    category: "Indian",
    time: "30 min",
    difficulty: "Easy",
    servings: 4,
    image: puri,
    description: "Crispy and fluffy deep-fried Indian puris perfect with sabzi.",
    ingredients: [
      "2 cups wheat flour",
      "Water as needed",
      "1/2 teaspoon salt",
      "1 teaspoon oil",
      "Oil for deep frying"
    ],
    instructions: [
      "Take wheat flour and salt in a bowl.",
      "Add a little oil and mix.",
      "Add water and make a firm dough.",
      "Rest the dough for 10 minutes.",
      "Make small balls from the dough.",
      "Roll each ball into a small round puri.",
      "Heat oil in a deep pan.",
      "Deep fry the puri until golden and fluffy.",
      "Serve hot with potato or chana sabzi."
    ]
  },

  {
    id: 15,
    title: "Kachori",
    category: "Indian",
    time: "45 min",
    difficulty: "Medium",
    servings: 4,
    image: kachori,
    description: "Crispy Indian kachori filled with a delicious and spicy mixture.",
    ingredients: [
      "2 cups wheat flour",
      "1 cup moong dal",
      "1 teaspoon cumin seeds",
      "1 teaspoon fennel seeds",
      "1 teaspoon red chilli powder",
      "1/2 teaspoon turmeric",
      "1 teaspoon garam masala",
      "2 tablespoons oil",
      "Salt to taste",
      "Oil for frying"
    ],
    instructions: [
      "Prepare a soft dough using flour, salt and oil.",
      "Soak and cook the moong dal.",
      "Heat oil and add cumin and fennel seeds.",
      "Add dal and all the spices.",
      "Cook the filling until it becomes dry.",
      "Make small dough balls and fill them with the dal mixture.",
      "Roll gently into small round kachoris.",
      "Deep fry on medium heat until golden and crispy.",
      "Serve hot with chutney or sabzi."
    ]
  }
];

export default recipes;