use("ProiectECBD");

db.Orders.drop();

db.createCollection("Orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user", "products", "order_date", "status"],
      properties: {
        user: {
          bsonType: "object",
          description: "Must be an object and is required",
        },

        products: {
          bsonType: "array",
          required: ["product", "quantity"],
          properties: {
            product: {
              bsonType: "object",
              description: "Must be an object and is required",
            },

            quantity: {
              bsonType: "int",
              minimum: 0,
              description: "Must be a integer and is required",
            },
          },
        },

        order_date: {
          bsonType: "date",
          description: "Must be a date and is required",
        },

        status: {
          enum: ["Pending", "In progress", "Done"],
          description: "Can only be one of the enum values and is required",
        },
      },
    },
  },
});
