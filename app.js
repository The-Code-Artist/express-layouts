const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

// Midlleware configuration.
const app = express();
app.use(express.static("public"));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use(expressLayouts);

// Set the templating engine.
app.set("views", "./views");
app.set("view engine", "ejs");
app.set("layout", `${__dirname}/views/layouts/layout`);

// Routes.
app.get('', (req, res) => { 
    res.render("index", { title: "Home" });
});

app.get("/about", function (req, res) {
    res.render("about", { title: "About", layout: "./layouts/sidebar" });
});

const port = process.env.port || 3000;

app.listen(port, () => { console.info(`App is listening on port: ${port} & DB_USER = ${process.env.DB_USER}`) });
