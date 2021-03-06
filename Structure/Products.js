use("ProiectECBD");

db.Products.drop();

db.createCollection("Products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "category", "price"],
      properties: {
        _id: {
          bsonType: "int",
          minimum: 1,
          description: "Must be an integer greater than 0 and is required",
        },

        name: {
          bsonType: "string",
          minLength: 3,
          description: "Must be a string and is required",
        },

        price: {
          bsonType: ["double", "int"],
          minimum: 0,
          description: "Must be a double and is required",
        },

        cateogry: {
          enum: ["Laptop, Tablete & Telefoane", "Bacanie", "Fashion"],
          description: "Can only be one of the enum values",
        },

        // Laptop, Tablete & Telefoane

        color: {
          bsonType: "string",
          minLength: 3,
          description: "Must be a string",
        },

        diagonal_display: {
          bsonType: ["int", "double"],
          description: "Can only be one of the enum values",
        },

        hard_disk_type: {
          enum: ["SSD", "HDD", "SSD+HDD"],
          description: "Can only be one of the enum values",
        },

        hard_disk_memory_SSD: {
          enum: [128, 256, 512, 1024, 2048, 4096],
          description: "Can only be one of the enum values",
        },

        hard_disk_memory_HDD: {
          enum: [128, 256, 512, 1024, 2048, 4096],
          description: "Can only be one of the enum values",
        },

        storage_capacity: {
          enum: [32, 64, 128, 256, 512],
          description: "Can only be one of the enum values",
        },

        sim_slot: {
          enum: ["Dual SIM", "Single SIM", "Hybrid SIM", "Triple SIM"],
          description: "Can only be one of the enum values",
        },

        sim_type: {
          enum: ["Nano SIM", "Micro SIM", "SIM"],
          description: "Can only be one of the enum values",
        },

        number_of_cameras: {
          bsonType: "int",
          description: "Must be an int and is not required",
        },

        principal_camera_resolution: {
          bsonType: "int",
          description: "Must be an int and is not required",
        },

        technology: {
          enum: ["3G", "4G", "5G"],
          description: "Can only be one of the enum values",
        },

        // Bacanie

        pack_type: {
          enum: ["Doza", "Sticla"],
          description: "Can only be one of the enum values",
        },

        // Fashion

        sex: {
          enum: ["M", "F", "Unisex"],
          description: "Can only be one of the enum values",
        },

        cloth_size: {
          enum: ["XS", "S", "M", "L", "XL"],
          description: "Can only be one of the enum values",
        },

        shoe_size: {
          bsonType: "array",
          items: {
            enum: [
              35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41,
              41.5, 42, 42.5, 43, 43.5, 44, 45, 46,
            ],
            description: "Can only be one of the enum values",
          },
        },
      },
    },
  },
});
