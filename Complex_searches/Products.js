// Create indexes
use("ProiectECBD");
db.Products.createIndex({
  name: "text",
  category: "text",
  OS: "text",
  color: "text",
});

// View indexes
use("ProiectECBD");
db.Products.getIndexes();

// Drop indexes
use("ProiectECBD");
db.Products.dropIndexes();

// Show total value of products
use("ProiectECBD");
db.Products.aggregate([
  {
    $group: {
      _id: null,
      totalValue: { $sum: "$price" },
      count: { $sum: 1 },
    },
  },

  {
    $project: { totalValue: 1, count: 1, _id: 0 },
  },
]);

// Show average value of a product
use("ProiectECBD");
db.Products.aggregate([
  {
    $group: {
      _id: null,
      avgPrice: { $avg: { $sum: "$price" } },
    },
  },

  {
    $project: { avgPrice: 1, _id: 0 },
  },
]);

// Show how many laptops are
use("ProiectECBD");
db.Products.find({ $text: { $search: "laptop" } }).count();

// The cheapest price of a product
use("ProiectECBD");
db.Products.aggregate([
  {
    $group: {
      _id: null,
      price: { $min: "$price" },
    },
  },

  {
    $project: { price: 1, _id: 0 },
  },
]);

// The most expensive product
use("ProiectECBD");
db.Products.aggregate([
  {
    $sort: {
      price: 1,
    },
  },

  {
    $limit: 1,
  },

  {
    $project: { name: 1, category: 1, price: 1, _id: 0 },
  },
]);

// Show all shoes
use("ProiectECBD");
db.Products.aggregate([
  {
    $unwind: "$shoe_size",
  },

  {
    $sort: { price: 1, shoe_size: 1 },
  },

  {
    $project: { name: 1, category: 1, price: 1, shoe_size: 1, _id: 0 },
  },
]);

use("ProiectECBD");
db.Products.find({});
