// Create indexes
use("ProiectECBD");
db.Users.createIndex({ firstName: "text", lastName: "text" });

// View indexes
use("ProiectECBD");
db.Users.getIndexes();

// Drop indexes
use("ProiectECBD");
db.Users.dropIndexes();

// Show all users whose firstName or lastName is john or butnaru
use("ProiectECBD");
db.Users.find({ $text: { $search: "john butnaru" } });

// Show all users in whose username contains 'ar' (case insensitive)
use("ProiectECBD");
db.Users.find({ username: { $regex: /ar/, $options: "i" } });

// Show all users in whose username does not contains 'ar' (case insensitive)
use("ProiectECBD");
db.Users.find({ username: { $not: { $regex: /ar/, $options: "i" } } });

// Show total of users in db
use("ProiectECBD");
db.Users.aggregate([
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

use("ProiectECBD");
db.Users.find({});
