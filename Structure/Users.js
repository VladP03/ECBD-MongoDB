use("ProiectECBD");

db.Users.drop();

db.createCollection("Users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "username", "email"],
      properties: {
        _id: {
          bsonType: "int",
          minimum: 1,
          description: "Must be an integer greater than 0 and is required",
        },

        username: {
          bsonType: "string",
          minLength: 5,
          maxLength: 30,
          description: "must be a string and is required",
        },

        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description:
            "must be a string and match the regular expression pattern",
        },

        firstName: {
          bsonType: "string",
          minLength: 4,
          maxLength: 30,
          pattern: "[a-zA-Z]+",
          description: "must be a string and is not required",
        },

        lastName: {
          bsonType: "string",
          minLength: 4,
          maxLength: 30,
          description: "must be a string and is not required",
        },

        isAdmin: {
          bsonType: "bool",
          description: "must be a boolean and is not required",
        },
      },
    },
  },
});
