// Create indexes
use("ProiectECBD");
db.Orders.createIndex({ order_date: 1, status: "text" });

// View indexes
use("ProiectECBD");
db.Orders.getIndexes();

// Drop indexes
use("ProiectECBD");
db.Orders.dropIndexes();

// Show for every done order his id, the value of order and the number of products ordered
use("ProiectECBD");
db.Orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $match: { status: "Done" },
  },

  {
    $group: {
      _id: "$_id",
      total_products_ordered: { $sum: "$products.quantity" },
      total_value: {
        $sum: { $multiply: ["$products.quantity", "$products.product.price"] },
      },
    },
  },
]);

// Show how many products were ordered between 10-ian-2017 and 10-ian-2019
use("ProiectECBD");
db.Orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $match: {
      order_date: {
        $gte: new Date(2017, 01, 10),
        $lte: new Date(2019, 01, 10),
      },
    },
  },

  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },

  {
    $project: { count: 1, _id: 0 },
  },
]);

// Show how many orderes contains at least 1 product from cateogry "Laptop, Tablete & Telefoane"
use("ProiectECBD");
db.Orders.aggregate([
  {
    $match: {
      "products.product.category": "Laptop, Tablete & Telefoane",
    },
  },

  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },

  {
    $project: { count: 1, _id: 0 },
  },
]);

// Show quantity of alcohol products ordered
use("ProiectECBD");
db.Orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $match: {
      "products.product.type": "Alcool",
    },
  },

  {
    $group: {
      _id: null,
      count: { $sum: "$products.quantity" },
    },
  },

  {
    $project: { count: 1, _id: 0 },
  },
]);

// Show total value of black color products ordered
use("ProiectECBD");
db.Orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $match: {
      "products.product.color": "Negru",
    },
  },

  {
    $group: {
      _id: null,
      total_value: {
        $sum: { $multiply: ["$products.quantity", "$products.product.price"] },
      },
    },
  },

  {
    $project: { total_value: 1, _id: 0 },
  },
]);

// Show which users placed an order
use("ProiectECBD");
db.Orders.aggregate([
  {
    $unwind: "$user",
  },

  {
    $group: {
      _id: null,
      user: { $addToSet: "$user" },
    },
  },

  {
    $project: { user: 1, _id: 0 },
  },
]);

use("ProiectECBD");
db.Orders.find({});
