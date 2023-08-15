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
      image: 'baconeggs.jpg',
      price: '7.00',
      quantity: 100
    },
    {
      name: 'Waffle House Breakfast',
      category: categories[0]._id,
      description: 'A country fried steak with two eggs of your preferred style with either diced potatoes or hash browns.',
      image: 'wafflehouse.jpg',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Philly Omelet',
      category: categories[0]._id,
      description: 'A Philly cheesesteak omelet with your choice of cheese and peppers, served with toast or a biscuit.',
      image: 'phillyomelet',
      price: '8.00',
      quantity: 100
    },
    {
      name: 'Krabby Patty',
      category: categories[1]._id,
      description: 'Just a well made burger with cheese, 100% USDA approved beef, pickles, tomatoes, lettuce and a side of fries.',
      image: 'krabbypatty.jpg',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Wings',
      category: categories[1]._id,
      description: 'KFC',
      image: 'KFC-chicken-wings.jpg',
      price: '12.00',
<<<<<<< HEAD
      quantity: '#'
    }, {
      name: 'BLT Salad',
=======
      quantity: 100
    },{
      name: 'BLT Macaroni Salad',
>>>>>>> d359eb8a7abfab70934ecf4a9c1fc0886c27400c
      category: categories[1]._id,
      description: 'Bacon, lettuce, tomato, salad',
      image: 'bltsalad.jpg',
      price: '8.00',
<<<<<<< HEAD
      quantity: '#'
    }, {
=======
      quantity: 100
    },{
>>>>>>> d359eb8a7abfab70934ecf4a9c1fc0886c27400c
      name: 'Steak and Taters',
      category: categories[2]._id,
      description: "A beef steak served with a loaded baked potato and your choice of side salad or soup.",
      image: 'steaktaters.jpg',
      price: '23.00',
<<<<<<< HEAD
      quantity: '#'
    }, {
=======
      quantity: 100
    },{
>>>>>>> d359eb8a7abfab70934ecf4a9c1fc0886c27400c
      name: 'Krusty Krab Pizza',
      category: categories[2]._id,
      description: 'A 16 inch New York style pepperoni pizza for everyone to enjoy!',
      image: 'krustykrabpizza.jpg',
      price: '18.00',
<<<<<<< HEAD
      quantity: '#'
    }, {
=======
      quantity: 100
    },{
>>>>>>> d359eb8a7abfab70934ecf4a9c1fc0886c27400c
      name: 'Lasagna',
      category: categories[2]._id,
      description: 'Lasagna',
      image: 'lasagna.jpg',
      price: '14.00',
      quantity: 100
    },
    {
      name: 'Water',
      category: categories[3]._id,
      description: 'Water',
      image: 'water.jpg',
      price: '9.00',
      quantity: 100
    },
    {
      name: 'Kelp Shake',
      category: categories[3]._id,
      description: 'Kelp Shake ',
      image: 'kelpshake.jpg',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Sprite',
      category: categories[3]._id,
      description: 'lemon-lime soda',
      image: 'sprite.jpg',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Dr. Pepper',
      category: categories[3]._id,
      description: 'Dr. Pepper',
      image: 'dr.pepper.jpg',
      price: '2.00',
      quantity: 100
    },
    {
      name: 'Onion Rings',
      category: categories[4]._id,
      description: 'Funyuns',
      image: 'onionrings.jpg',
      price: '3.50',
      quantity: 100
    },
    {
      name: 'Mac and Cheese',
      category: categories[4]._id,
      description: 'Mac and Cheese',
      image: 'macandcheese.jpg',
      price: '4.00',
      quantity: '#'
    },
    {
      name: 'French Fries',
      category: categories[4]._id,
      description: 'Choice of sweet potato, waffle, and curly.',
      image: 'frenchfries.jpg',
      price: '2.50',
      quantity: '#'
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
