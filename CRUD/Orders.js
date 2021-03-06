use("ProiectECBD");

db.Orders.deleteMany({});

var users = db.Users.find({}).toArray();
var products = db.Products.find({}).toArray();

db.Orders.insertMany([
  {
    user: users[1],
    products: [
      {
        product: products[6],
        quantity: 1,
      },
    ],
    order_date: new Date(2017, 4, 5, 11, 04),
    status: "Done",
  },

  {
    user: users[1],
    products: [
      {
        product: products[15],
        quantity: 1,
      },
      {
        product: products[12],
        quantity: 4,
      },
      {
        product: products[10],
        quantity: 5,
      },
      {
        product: products[2],
        quantity: 2,
      },
    ],
    order_date: new Date(2019, 3, 10, 12, 05),
    status: "Pending",
  },

  {
    user: users[1],
    products: [
      {
        product: products[15],
        quantity: 2,
      },
    ],
    order_date: new Date(2019, 3, 19, 11, 40),
    status: "In progress",
  },

  {
    user: users[2],
    products: [
      {
        product: products[1],
        quantity: 10,
      },
      {
        product: products[9],
        quantity: 3,
      },
      {
        product: products[7],
        quantity: 2,
      },
    ],
    order_date: new Date(2021, 10, 14, 19, 05),
    status: "In progress",
  },

  {
    user: users[2],
    products: [
      {
        product: products[4],
        quantity: 4,
      },
    ],
    order_date: new Date(2018, 2, 15, 16, 09),
    status: "Pending",
  },

  {
    user: users[3],
    products: [
      {
        product: products[16],
        quantity: 1,
      },
    ],
    order_date: new Date(2020, 4, 21, 8, 08),
    status: "Pending",
  },
]);

db.Orders.bulkWrite([
  {
    updateMany: {
      filter: { order_date: { $lt: new Date(2019, 4, 14) } },
      update: { $set: { status: "Done" } },
    },
  },

  {
    insertOne: {
      user: users[5],
      products: [
        {
          product: products[16],
          quantity: 1,
        },
        {
          product: products[11],
          quantity: 3,
        },
      ],
      order_date: new Date(2021, 6, 21, 8, 08),
      status: "In progress",
    },
  },

  {
    deleteMany: { filter: { user: users[5] } },
  },
]);

db.Orders.find({});
