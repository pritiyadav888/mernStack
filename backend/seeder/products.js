const products = [
  {
    name: "Tomato",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Potato",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Kale",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Eggs",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Tablets",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Parsley",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Tablets",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Milk",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Tablets",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Honey",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Tablets",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Onion Chives",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Tablets",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Collard Greens",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Monitors",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Thai mix salad",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Monitors",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Fruit salad",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Monitors",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Diet Coke",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Monitors",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Lemon",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Monitors",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mushroom",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Games",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Spinach",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Games",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Feta Cheese",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Games",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Baked Pasta",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Games",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Smokey Gouda Cheese",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Games",
    images: [
      { path: "/images/parsley-category.jpg" },
      { path: "/images/potato-category.jpg" },
      { path: "/images/tomato-category.jpg" },
    ],
    reviewsNumber: 9,
    reviews: [],
  },
];

module.exports = products;
