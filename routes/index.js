var express = require("express");
var router = express.Router();
const users = [
  { name: "Aurelie", email: "foo@aurelie", favoriteLangage: "JS" },
  { name: "Quentin", email: "baz@quentin", favoriteLangage: "React.js" },
  { name: "Alice", email: "bar@alice", favoriteLangage: "french" }
];
const images = ["anna.jpg", "sean.jpg", "team.jpg"]
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {images});
});

router.get("/my-dev-squad", function (req, res, next) {
  res.render("hackers", {users});
});
router.get("/add-new-ironhacker", function (req, res, next) {
  res.render("new-hacker", {users});
});

module.exports = router;
