const express = require("express");
const {
  getListCart,
  addListItem,
  editListCart,
  deleteListItem,
} = require("../controllers/ListCart");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Anasayfaya Hoşgeldin");
});

router.get("/getListCart", getListCart);

router.post("/addListCard", addListItem);

router.put("/editListCart", editListCart);

router.delete("/deleteListItem", deleteListItem);

module.exports = router;
