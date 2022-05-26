// show for each order how many products from category "Laptop, Tablete & Telefoane" ordered
use("ProiectECBD");

var mapFunc = function () {
  for (let i = 0; i < this.products.length; i++) {
    emit(this._id, this.products[i]);
  }
};

var reduceFunc = function (key, values) {
  let count = 0;

  for (const value of values) {
    if (value.product.category == "Laptop, Tablete & Telefoane") {
      count++;
    }
  }

  return count;
};

db.Orders.mapReduce(mapFunc, reduceFunc, { out: "result1" });
db.result1.find({});



// Total value of all orders (price * quantity)
use("ProiectECBD");

var mapFunc = function () {
  for (let i = 0; i < this.products.length; i++) {
    emit(null, this.products[i]);
  }
};

var reduceFunc = function (key, values) {
  let totalValue = 0;

  for (const value of values) {
    totalValue += value.product.price * value.quantity;
  }

  return totalValue;
};

db.Orders.mapReduce(mapFunc, reduceFunc, { out: "result2" });
db.result2.find({}, { _id: 0, value: 1 });



// Total orders done
use("ProiectECBD");

var mapFunc = function () {
  emit(null, this.status);
};

var reduceFunc = function (key, values) {
  let count = 0;

  for (const value of values) {
    if (value == "Done") {
      count++;
    }
  }

  return count;
};

db.Orders.mapReduce(mapFunc, reduceFunc, { out: "result3" });
db.result3.find({}, { _id: 0, value: 1 });
