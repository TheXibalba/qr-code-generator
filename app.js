const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const qrUrl = req.body.url;
  console.log(qrUrl);
  res.render("genPage", {
    QR: qrUrl,
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
