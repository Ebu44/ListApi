const express = require("express");
const {
  getListCart,
  getListItem,
  addListItem,
  editListCart,
  deleteListItem,
} = require("../controllers/ListCart");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Anasayfaya Hoşgeldin");
});

router.get("/ListCart", getListCart);

router.get("/ListCart/:item_id", getListItem);

router.post("/ListCart", addListItem);

router.put("/ListCart/:item_id", editListCart);

router.delete("/ListCart/:item_id", deleteListItem);

module.exports = router;
