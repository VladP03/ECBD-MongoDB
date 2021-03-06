use("ProiectECBD");

db.Products.deleteMany({});

/********************************* 
    Laptop, Tablete & Telefoane 
*********************************/

// Laptopuri
db.Products.insertMany([
  {
    _id: 1,
    name: "Laptop Apple MacBook Pro 13 inch, True Tone, procesor Apple M1, 8 nuclee CPU si 8 nuclee GPU, 8GB, 256GB SSD, Silver, INT KB",
    category: "Laptop, Tablete & Telefoane",
    price: 5499.99,
    processor: "Apple",
    processor_type: "M1",
    number_of_cores: 8,
    diagonal_display: 13.3,
    RAM: 8,
    hard_disk_type: "SSD",
    hard_disk_memory_SSD: 256,
    OS: "Mac OS",
    color: "Argintiu",
  },

  {
    _id: 2,
    name: "Laptop HP 17-cn0042nq cu procesor Intel Celeron N4020, 17.3 inch, Full HD, 4GB, 256GB SSD, Intel UHD Graphics, Windows 11 Home, Natural silver",
    category: "Laptop, Tablete & Telefoane",
    price: 1999.99,
    processor: "Intel",
    processor_type: "Celeron",
    number_of_cores: 2,
    diagonal_display: 17.3,
    RAM: 4,
    hard_disk_type: "SSD",
    hard_disk_memory_SSD: 256,
    OS: "Windows 11",
    color: "Argintiu",
  },

  {
    _id: 3,
    name: "Laptop ultraportabil Acer Aspire One 14 cu procesor Intel® Pentium® Gold 4415U 2.30 GHz, 14 inch, HD, 4GB, 1TB HDD, Intel® HD Graphics, Windows 10 Home, Silver",
    category: "Laptop, Tablete & Telefoane",
    price: 999.99,
    processor: "Intel",
    processor_type: "Celeron",
    number_of_cores: 2,
    diagonal_display: 15.6,
    RAM: 4,
    hard_disk_type: "HDD",
    hard_disk_memory_HDD: 1024,
    OS: "Windows 10",
    color: "Argintiu",
  },

  {
    _id: 4,
    name: "Laptop HP 15-dw1018nq cu procesor Intel Celeron N4020 pana la 2.80 GHz, 15.6 inch, HD, 4GB, 256GB SSD, Intel UHD Graphics, Free DOS, Jet Black",
    category: "Laptop, Tablete & Telefoane",
    price: 1099.99,
    processor: "Intel",
    processor_type: "Celeron",
    number_of_cores: 2,
    diagonal_display: 15.6,
    RAM: 4,
    hard_disk_type: "SSD",
    hard_disk_memory_SSD: 256,
    OS: "Windows 10",
    color: "Negru",
  },

  {
    _id: 5,
    name: "Laptop HP 250 G8 cu procesor Intel Celeron N4020, 15.6 inch, HD, 4GB, 256GB SSD, Intel UHD Graphics, Free DOS, Dark Ash Silver",
    category: "Laptop, Tablete & Telefoane",
    price: 1099.99,
    processor: "Intel",
    processor_type: "Celeron",
    number_of_cores: 2,
    diagonal_display: 15.6,
    RAM: 4,
    hard_disk_type: "SSD",
    hard_disk_memory_SSD: 512,
    OS: "Windows 10",
    color: "Argintiu",
  },

  {
    _id: 6,
    name: "Laptop Huawei MateBook D15, Intel Core i3-10110U pana la 4.1GHz, 15.6 inch Full HD, 8GB, SSD 256GB, Intel UHD Graphics, Windows 10 Home, Silver",
    category: "Laptop, Tablete & Telefoane",
    price: 1899.99,
    processor: "Intel",
    number_of_cores: 4,
    diagonal_display: 15.6,
    RAM: 8,
    hard_disk_type: "SSD+HDD",
    hard_disk_memory_SSD: 256,
    hard_disk_memory_HDD: 512,
    OS: "Windows 10",
    color: "Argintiu",
  },
]);

// Tablete
db.Products.insertMany([
  {
    _id: 7,
    name: "Apple iPad 9 (2021), 10.2 inch, 64GB, Wi-Fi, Space Grey",
    category: "Laptop, Tablete & Telefoane",
    price: 1819.99,
    processor: "Apple",
    processor_type: "A13 Bionic",
    diagonal_display: 10.2,
    storage_capacity: 64,
    OS: "IPadOS 15",
    color: "Gri",
  },

  {
    _id: 8,
    name: "Tableta Xiaomi Pad 5, Octa-Core, 11 inch, 6GB RAM, 128GB, Wi-Fi, Pearl White",
    category: "Laptop, Tablete & Telefoane",
    price: 1796.9,
    processor: "Qualcomm",
    processor_type: "Snapdragon 860",
    diagonal_display: 11,
    storage_capacity: 128,
    OS: "Android 11",
    color: "Alb",
  },

  {
    _id: 9,
    name: "Tableta Samsung Galaxy Tab A8, Octa-Core, 10.5 inch, 3GB RAM, 32GB, WIFI, Gray",
    category: "Laptop, Tablete & Telefoane",
    price: 829.99,
    processor: "Samsung",
    diagonal_display: 10.5,
    sim_slot: "Dual SIM",
    sim_type: "Nano SIM",
    storage_capacity: 32,
    OS: "Android 11",
    color: "Gri",
  },
]);

// Telefone
db.Products.insertMany([
  {
    _id: 10,
    name: "Telefon mobil Xiaomi Redmi Note 10, Dual Sim, 4GB Ram, 64GB, 5G, Graphite Gray",
    category: "Laptop, Tablete & Telefoane",
    price: 790,
    processor_type: "MediaTek Dimensity 700",
    diagonal_display: 6.5,
    sim_slot: "Dual SIM",
    sim_type: "Nano SIM",
    storage_capacity: 64,
    number_of_cameras: 3,
    principal_camera_resolution: 8,
    technology: "4G",
    OS: "Android 11",
    color: "Gri",
  },

  {
    _id: 11,
    name: "Telefon mobil DOOGEE N30, Dual SIM, 4GB RAM, 128GB, 4G, Black",
    category: "Laptop, Tablete & Telefoane",
    price: 699.03,
    processor: "Samsung",
    diagonal_display: 6.55,
    sim_slot: "Dual SIM",
    sim_type: "Nano SIM",
    RAM: 4,
    storage_capacity: 128,
    number_of_cameras: 2,
    principal_camera_resolution: 6,
    technology: "4G",
    OS: "Android 10",
    color: "Negru",
  },

  {
    _id: 12,
    name: "Telefon mobil Samsung Galaxy A22, Dual SIM, 64GB, 5G, White",
    category: "Laptop, Tablete & Telefoane",
    price: 699.93,
    processor_type: "MediaTek MT6833 Dimensity 700 5G",
    diagonal_display: 6.6,
    sim_slot: "Dual SIM",
    sim_type: "Nano SIM",
    RAM: 4,
    storage_capacity: 64,
    number_of_cameras: 3,
    principal_camera_resolution: 12,
    technology: "5G",
    OS: "Android 11",
    color: "Alb",
  },
]);

/********************************* 
            Bacanie 
*********************************/
db.Products.insertMany([
  {
    _id: 13,
    name: "Bere Blonda superioara Stella Artois, Doza, 6 x 0.5l",
    category: "Bacanie",
    price: 26.76,
    pack_type: "Doza",
    type: "Alcool",
    amount: "3 l",
  },

  {
    _id: 14,
    name: "Bere Blonda Corona Extra, Sticla, 6 x 0.355l",
    category: "Bacanie",
    price: 40.84,
    pack_type: "Sticla",
    type: "Alcool",
    amount: "2.13 l",
  },

  {
    _id: 15,
    name: "Bere Blonda Paulaner, 5.5%, Sticla, 20 x 0.5l",
    category: "Bacanie",
    price: 156.4,
    pack_type: "Sticla",
    type: "Alcool",
    amount: "10 l",
  },
]);

/********************************* 
            Fashion 
*********************************/
db.Products.insertMany([
  {
    _id: 16,
    name: "Pantofi sport din piele ecologica cu detalii logo Carina Raw, Negru",
    category: "Fashion",
    price: 229.99,
    shoe_size: [35, 36, 36.5, 37, 37.5, 40],
    sex: "F",
    brand: "Skechers",
    color: "Negru",
    material: "Piele ecologica",
  },

  {
    _id: 17,
    name: "Skechers, Pantofi sport de plasa Bobs Squad",
    category: "Fashion",
    price: 179.99,
    shoe_size: [35, 35.5, 36, 36.5, 37, 37.5, 38, 39, 40, 41],
    sex: "F",
    brand: "Skechers",
    color: "Alb",
    material: "Plasa",
  },
]);

db.Products.bulkWrite([
  {
    insertOne: {
      _id: 18,
      name: "Puma, Pantofi sport din material textil ST Activate",
      category: "Fashion",
      price: 199.99,
      shoe_size: [
        35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5,
        42, 42.5, 43, 43.5, 44, 45, 46,
      ],
      sex: "M",
      brand: "Puma",
      color: "Negru",
      material: "Textil",
    },
  },

  {
    updateMany: {
      filter: { category: "Laptop, Tablete & Telefoane" },
      update: {
        $mul: { price: 1.1 },
      },
    },
  },

  {
    updateMany: {
      filter: { price: { $lt: 100 } },
      update: {
        $inc: { price: 5 },
      },
    },
  },
]);

db.Products.find({});
