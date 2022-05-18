use("ProiectECBD");

db.Users.deleteMany({});

function insertAdmin(_id, username, email) {
  var isInserted = db.Users.insertOne({
    _id: _id,
    username: username,
    email: email,
    isAdmin: true,
  });
}

function insertOneByOneCustom(id, username, first_name, last_name, email) {
  var isInserted = db.Users.insertOne({
    _id: id,
    username: username,
    firstName: first_name,
    lastName: last_name,
    email: email,
  });
}

insertAdmin(
    1, 
    "admin", 
    "admin@technical-owner.com"
);


insertOneByOneCustom(
    2, 
    "gigelfrone", 
    "Gigel", 
    "Frone", 
    "gigelfrone@gmail.com"
);

insertOneByOneCustom(
  3,
  "alexandruzbereanu",
  "Alexandru",
  "Zbereanu",
  "alexzbereanu@gmail.com"
);

insertOneByOneCustom(
  4,
  "iulianprelipcean",
  "Iulian",
  "Prelipcean",
  "iulianprelipcean@gmail.net"
);

insertOneByOneCustom(
  5,
  "silviubutnaru",
  "Silviu",
  "Butnaru",
  "silviubutnaru@gmail.com"
);

insertOneByOneCustom(
  6,
  "johnbaltariu",
  "John",
  "Baltariu",
  "johnbaltariu@gmail.com"
);

db.Users.bulkWrite([
  {
    insertOne: {
      _id: 7,
      username: "testpurpose1",
      firstName: "Test",
      lastName: "Purpose",
      email: "testpurpose@gmail.com",
    },
  },

  {
    insertOne: {
      _id: 8,
      username: "testpurpose2",
      firstName: "Mihail",
      lastName: "Sadoveanu",
      email: "mihailsadoveanu@gmail.com",
    },
  },

  {
    insertOne: {
      _id: 9,
      username: "testpurposeBulk",
      firstName: "Test",
      lastName: "Purpose",
      email: "testpurpose@gmail.net",
    },
  },

  {
    updateOne: {
      filter: { username: "testpurpose2" },
      update: { $set: { username: "mihailsadoveanu" } },
    },
  },

  {
    deleteOne: { filter: { username: "testpurpose1" } },
  },

  {
    deleteMany: { filter: { email: { $regex: "@gmail.net$" } } },
  },

  {
    replaceOne: {
      filter: { username: "gigelfrone" },
      replacement: {
        username: "mihaelapaval",
        firstName: "Mihaela",
        lastName: "Paval",
        email: "mihaelapaval@gmail.com",
      },
    },
  },
]);

db.Users.find({});
