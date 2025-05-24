export interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'breakfast' | 'brunch' | 'lunch' | 'dinner';
  tags?: 'recommended' | 'chef choice' | 'seasonal' | 'bogo offer';
  image?: string;
}

export interface ChefProps {
  id: string;
  name: string;
  position: string;
  image: string;
  slug: string;
}

export interface TestimonialProps {
  id: string;
  name: string;
  position: string;
  comment: string;
  image: string;
}

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
}

export const menuItems: MenuItemProps[] = [
  {
    id: "1",
    name: "Delicious Pancakes",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "breakfast",
    tags: "recommended",
  },
  {
    id: "2",
    name: "Oatmeal Spirit",
    description: "Kiwee, Baby Corn, Blue berry",
    price: "$27.85",
    category: "breakfast",
  },
  {
    id: "3",
    name: "Summertime Pesto Pasta",
    description: "Soft and juice, with garlic & ginger",
    price: "$18.10",
    category: "breakfast",
  },
  {
    id: "4",
    name: "Steak & Toast",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "breakfast",
    tags: "chef choice",
  },
  {
    id: "5",
    name: "Avocado Smash",
    description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    price: "$12.85",
    category: "breakfast",
  },
  {
    id: "6",
    name: "Fish Oysters Dozen",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "breakfast",
  },
  {
    id: "7",
    name: "Classic Eggs Benedict",
    description: "Smoked canadian bacon, Hollandaise sauce, Muffin",
    price: "$27.85",
    category: "breakfast",
  },
  {
    id: "8",
    name: "Has Brown",
    description: "Tomato, Salt, Black Pepper, Lemon",
    price: "$27.85",
    category: "breakfast",
    tags: "bogo offer",
  },
  {
    id: "9",
    name: "Sunny California",
    description: "Poached eggs, Avocado, Tomato, Muffin",
    price: "$20.00",
    category: "breakfast",
    tags: "seasonal",
  },
  {
    id: "10",
    name: "Fish & Chips",
    description: "Tomato, Salt, Black Pepper, Lemon",
    price: "$27.85",
    category: "breakfast",
    tags: "recommended",
  },
  // Brunch items
  {
    id: "11",
    name: "Grill Salmon",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "brunch",
    tags: "recommended",
  },
  {
    id: "12",
    name: "Summertime Pesto Pasta",
    description: "Soft and juice, with garlic & ginger",
    price: "$18.10",
    category: "brunch",
  },
  {
    id: "13",
    name: "Crispy Skin Chicken",
    description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    price: "$12.85",
    category: "brunch",
  },
  {
    id: "14",
    name: "Pan Fried Barramundi",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "brunch",
  },
  {
    id: "15",
    name: "BBQ ribs",
    description: "Soft and juice, with garlic & ginger",
    price: "$20.00",
    category: "brunch",
    tags: "seasonal",
  },
  // Lunch items
  {
    id: "16",
    name: "Grill Salmon",
    description: "Soft and juice, with garlic & ginger",
    price: "$27.85",
    category: "lunch",
    tags: "recommended",
  },
  {
    id: "17",
    name: "Summertime Pesto Pasta",
    description: "Kiwee, Baby Corn, Blue berry",
    price: "$18.10",
    category: "lunch",
  },
  {
    id: "18",
    name: "Crispy Skin Chicken",
    description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    price: "$12.85",
    category: "lunch",
  },
  // Dinner items
  {
    id: "19",
    name: "Beer Battered Fish & Chips",
    description: "Atlantic cod fillet, chips, salad, tartare, lemon",
    price: "$27.85",
    category: "dinner",
  },
  {
    id: "20",
    name: "Summertime Pesto Pasta",
    description: "Soft and juice, with garlic & ginger",
    price: "$18.10",
    category: "dinner",
  },
  {
    id: "21",
    name: "Crispy Skin Chicken",
    description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    price: "$12.85",
    category: "dinner",
    tags: "recommended",
  },
];

export const chefs: ChefProps[] = [
  {
    id: "1",
    name: "Robert Williamson",
    position: "Master Chef",
    image: "https://ext.same-assets.com/1940906381/2790445441.jpeg",
    slug: "robert-williamson",
  },
  {
    id: "2",
    name: "Sturart Macgil",
    position: "Executive Chef",
    image: "https://ext.same-assets.com/1940906381/3371728420.jpeg",
    slug: "sturart-macgil",
  },
  {
    id: "3",
    name: "Sofiya Muntajer",
    position: "Pasta Chef",
    image: "https://ext.same-assets.com/1940906381/2327183941.jpeg",
    slug: "sofiya-muntajer",
  },
  {
    id: "4",
    name: "Lorenzo Morelli",
    position: "Chef de Prties",
    image: "https://ext.same-assets.com/1940906381/977168275.jpeg",
    slug: "lorenzo-morelli",
  },
];

export const testimonials: TestimonialProps[] = [
  {
    id: "1",
    name: "Samuel Marchal",
    position: "",
    comment: "You find something different from your usual pizza/kebab fast food there. A good change with Balkan and Greek options. Portions are rather big and the food is simple but well done.",
    image: "https://cdn.prod.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9ea1356119749d7a5f5b0_author-01.png",
  },
  {
    id: "2",
    name: "Uksi Uotinen",
    position: "",
    comment: "Very good service once again! You can get a tasty and big meal quickly and cheaply. Definitely the best grill place in the Oulu area! ",
    image: "https://cdn.prod.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9ea2ab1946b363a74fa93_author-02.png",
  },
  {
    id: "3",
    name: "Henrikki Paavola",
    position: "",
    comment: "The most delicious grill I've ever been to! A good-sized portion and a wonderful taste!",
    image: "https://cdn.prod.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9ea2ab1946b363a74fa93_author-02.png",
  },
];

export const blogPosts: BlogPostProps[] = [
  {
    id: "1",
    title: "New menu added our menu you can exchange your test",
    excerpt: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu",
    date: "November 9, 2023",
    author: "Rose",
    slug: "new-menu-added-our-menu-you-can-exchange-your-test",
    image: "https://ext.same-assets.com/1940906381/2803412184.jpeg",
  },
  {
    id: "2",
    title: "Its very important to make healthy kitchen for fresh food",
    excerpt: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu",
    date: "November 9, 2023",
    author: "Smith",
    slug: "its-very-important-to-make-healthy-kitchen-for-fresh-food",
    image: "https://ext.same-assets.com/1940906381/3756011995.jpeg",
  },
  {
    id: "3",
    title: "Great food can make your all party more enjoyable",
    excerpt: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu",
    date: "November 7, 2023",
    author: "David",
    slug: "great-food-can-make-your-all-party-more-enjoyable",
    image: "https://ext.same-assets.com/1940906381/134474533.jpeg",
  },
];
