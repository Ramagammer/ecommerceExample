const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let products = [
    {
        id: 1,
        name: "2 Mancuernas",
        price: 50,
        image: "images/product-1.jpg",
        stock: 3
    },
    {
        id: 2,
        name: "Banco ajustable",
        price: 300,
        image: "images/product-2.jpg",
        stock: 3
    },
    {
        id: 3,
        name: "Kit de discos",
        price: 250,
        image: "images/product-3.jpg",
        stock: 3
    },
    {
        id: 4,
        name: "Kit barra + discos",
        price: 200,
        image: "images/product-4.jpg",
        stock: 3
    },
    {
        id: 5,
        name: "Pesa de 30kg",
        price: 10,
        image: "images/product-5.jpg",
        stock: 3
    },
    {
        id: 6,
        name: "Bolsa de boxeo",
        price: 650,
        image: "images/product-6.jpg",
        stock: 3
    },
];

app.get("/api/products", (req, res) => {
    res.send(products);
  });
  
  app.post("/api/pay", (req, res) => {
    const ids = req.body;
    const procutsCopy = products.map((p) => ({ ...p }));
    ids.forEach((id) => {
      const product = procutsCopy.find((p) => p.id === id);
      if (product.stock > 0) {
        product.stock--;
      } else {
        throw "Sin stock";
      }
    });
    products = procutsCopy;
    res.send(products);
  });
  
app.use("/", express.static("frontend"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
