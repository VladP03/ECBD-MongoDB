// Show user with _id 1 (admin)
use("ProiectECBD");
db.Users.find({ _id: 1 });

// Show user with _id 8 (normal user)
use("ProiectECBD");
db.Users.find({ _id: 8 });

// Show user with _id 100 (non-existent)
use("ProiectECBD");
db.Users.find({ _id: 100 });

// Show users that are admins
use("ProiectECBD");
db.Users.find({ isAdmin: { $eq: true } });

// Show users that are not admins
use("ProiectECBD");
db.Users.find({ isAdmin: { $eq: null } });

// Show users with id greater than 5
use("ProiectECBD");
db.Users.find({ _id: { $gt: 5 } });

// Show users with id lower or equal than 3
use("ProiectECBD");
db.Users.find({ _id: { $lte: 3 } });

// Show users by username starting with 'a'
use("ProiectECBD");
db.Users.find({ username: /^a/ });

// Show users by username ending in 'a'
use("ProiectECBD");
db.Users.find({ username: /u$/ });

// Show users by username which starts with 'a' or ends in 'u'
use("ProiectECBD");
db.Users.find({ username: { $in: [/^a/, /u$/] } });

// Show users whose username starts with 'a' or last name ends in 'u'
use("ProiectECBD");
db.Users.find({
  $or: [{ username: /^a/ }, { lastName: /u$/ }],
});
