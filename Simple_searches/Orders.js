// Show all orders sorted by date asc
use("ProiectECBD");
db.Orders.find({}).sort({ order_date: 1 });

// Show all orders made by user with username 'alexandruzbereanu'
use("ProiectECBD");
db.Orders.find(
  { "user.username": "alexandruzbereanu" },
  { _id: 1, "products.product._id": 1 }
);

// Show all orders which contains product with id 10
use("ProiectECBD");
db.Orders.find({ "products.product._id": 10 }, { _id: 1, user: 1 });

// Show all orders before 12-jan-2018
use("ProiectECBD");
db.Orders.find({ order_date: { $lte: new Date(2018, 01, 12) } }, { _id: 1 });

// Show all finished orders
use("ProiectECBD");
db.Orders.find({ status: "Done" }, { _id: 1, order_date: 1 });

// Show all orders made by user with id 2 and 3
use("ProiectECBD");
db.Orders.find(
  { $or: [{ "user._id": 2 }, { "user._id": 3 }] },
  { _id: 1, order_date: 1 }
);

// Show all orders which ordered at least 3 different products
use("ProiectECBD");
db.Orders.find(
  {
    "products.2": { $exists: true },
  },
  { _id: 1, order_date: 1 }
);

// Show a list of 2 orders ordered by date, page 2
function printOrdedrs(pageNumber, nrPerPage) {
  console.log("Page: " + pageNumber + " with: " + nrPerPage + " per page");

  db.Orders.find()
    .sort({ order_date: 1 })
    .skip(pageNumber > 0 ? (pageNumber - 1) * nrPerPage : 0)
    .limit(nrPerPage)
    .forEach((order) => {
      print(order._id + " at date:" + order.order_date + " from " + order.user.username);
    });
}

use("ProiectECBD");
printOrdedrs(2, 2);

use("ProiectECBD");
db.Orders.find();