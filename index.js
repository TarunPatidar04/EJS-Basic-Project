import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {

  res.render("home");
});
app.get("/about", (req, res) => {
  let items = ["apple", "banana", "orange"];
  var user = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
    {
      name: "Doe",
      age: 22,
    },
  ];
  res.render("about", {
    title: "About Us",
    message: "Welcome to the about page!",
    age: 22,
    items: items,
    user: user,
  });
});

app.get("/form", (req, res) => {
  res.render("form", { message: null });
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const message = `Hello ${name}, Your form has been submitted successfully!`;
  res.render("form", { message: message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
