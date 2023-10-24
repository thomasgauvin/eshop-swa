import express from "express";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import router from "./api";
import cors from "cors";
const path = require('path');

const app = express()
const port = process.env.PORT || 4000

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "eShop - Catalog HTTP API",
        version: "0.1.0",
        description:
          "The Catalog service HTTP API. THis is a Data-Driven/CRUD sample.",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./api.js"],
  };
  
const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use(cors());

app.use(router);

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})