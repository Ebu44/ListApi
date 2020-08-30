const ListCart = require("../models/ListCart");

//Add

const addListItem = (req, res, next) => {
  const { name, amount, price } = req.body;

  const card = ListCart.create({
    name,
    amount,
    price,
  });
  res.send("Welcome");
};

const getListCart = (req, res, next) => {
  ListCart.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.send("Getting");
};

const editListCart = (req, res, next) => {
  //Update
};

const deleteListItem = () => {
  //Delete
};

module.exports = { getListCart, addListItem, editListCart, deleteListItem };
