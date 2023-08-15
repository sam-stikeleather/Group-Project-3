const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Drinks' },
    { name: 'Sides' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bacon And Eggs',
      category: categories[0]._id,
      description: 'Two eggs of your preferred style, a choice of bacon or sausage, as well as a choice of four pancakes or waffles.',
      image: '#',
      price: '7.00',
      quantity: 100
    },
    {
      name: 'Waffle House Breakfast',
      category: categories[0]._id,
      description: 'A country fried steak with two eggs of your preferred style with either diced potatoes or hash browns.',
      image: '#',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Philly Omelet',
      category: categories[0]._id,
      description: 'A Philly cheesesteak omelet with your choice of cheese and peppers, served with toast or a biscuit.',
      image: '#',
      price: '8.00',
      quantity: 100
    },
    {
      name: 'Krabby Patty',
      category: categories[1]._id,
      description: 'Just a well made burger with cheese, 100% USDA approved beef, pickles, tomatoes, lettuce and a side of fries.',
      image: '#',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Wings',
      category: categories[1]._id,
      description: 'KFC',
      image: '#',
      price: '12.00',
      quantity: 100
    },{
      name: 'BLT Macaroni Salad',
      category: categories[1]._id,
      description: 'Bacon, lettuce, tomato, salad',
      image: '#',
      price: '8.00',
      quantity: 100
    },{
      name: 'Steak and Taters',
      category: categories[2]._id,
      description: "A beef steak served with a loaded baked potato and your choice of side salad or soup.",
      image: '#',
      price: '23.00',
      quantity: 100
    },{
      name: 'Krusty Krab Pizza',
      category: categories[2]._id,
      description: 'A 16 inch New York style pepperoni pizza for everyone to enjoy!',
      image: '#',
      price: '18.00',
      quantity: 100
    },{
      name: 'Lasagna',
      category: categories[2]._id,
      description: 'Lasagna',
      image: '#',
      price: '14.00',
      quantity: 100
    },
    {
      name: 'Water',
      category: categories[3]._id,
      description: 'Water',
      image: '#',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Kelp Shake',
      category: categories[3]._id,
      description: 'Kelp Shake ',
      image: '#',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Sprite',
      category: categories[3]._id,
      description: 'lemon-lime soda',
      image: '#',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Dr. Pepper',
      category: categories[3]._id,
      description: 'Dr. Pepper',
      image: '#',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Onion Rings',
      category: categories[4]._id,
      description: 'Funyuns',
      image: '#',
      price: '3.50',
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
