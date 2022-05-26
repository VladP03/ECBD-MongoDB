// Show all products that have SSD or HDD as hard disk type
use("ProiectECBD");
db.Products.find({ hard_disk_type: { $in: ["SSD", "HDD"] } });

// Show all products that have shoe size 42, 42.5, 43, made from textile and black color
use("ProiectECBD");
db.Products.find({
  $and: [
    { shoe_size: { $in: [42, 42.5, 43] } },
    { material: "Textil" },
    { color: "Negru" },
  ],
});

// Show products whose OS is 'Mac OS'
use("ProiectECBD");
db.Products.find({ OS: "Mac OS" });

// Show all products that are priced less than or equal to 100
use("ProiectECBD");
db.Products.find({ price: { $lte: 100 } });

// Show the cheapest 3 products
use("ProiectECBD");
db.Products.find({}).sort({ price: 1 }).limit(3);

// Show the 3 most expensive products
use("ProiectECBD");
db.Products.find({}).sort({ price: -1 }).limit(3);

// Show products from category 'Laptop, Tablete & Telefoane' priced between 1000-3000
use("ProiectECBD");
db.Products.find({
  $and: [
    { category: "Laptop, Tablete & Telefoane" },
    { price: { $gte: 1000, $lte: 3000 } },
  ],
});

// Show products from category 'Laptop, Tablete & Telefoane' with Intel processor
use("ProiectECBD");
db.Products.find({
  $and: [{ category: "Laptop, Tablete & Telefoane" }, { processor: "Intel" }],
});

// Show products from category 'Laptop, Tablete & Telefoane' with Intel or Apple processor priced between 1500 - 7500
use("ProiectECBD");
db.Products.find({
  $and: [
    { category: "Laptop, Tablete & Telefoane" },
    { $or: [{ processor: "Intel" }, { processor: "Apple" }] },
    { price: { $gte: 1500, $lte: 7500 } },
  ],
});

// Show a list of 2 products from category "Laptop, Tablete & Telefoane", page 2
function printProducts(pageNumber, nrPerPage) {
  console.log("Page: " + pageNumber + " with: " + nrPerPage + " per page");

  db.Products.find()
    .sort({ _id: 1 })
    .skip(pageNumber > 0 ? (pageNumber - 1) * nrPerPage : 0)
    .limit(nrPerPage)
    .forEach((product) => {
      print(product._id + ": " + product.name);
    });
}

use("ProiectECBD");
printProducts(2, 2);