const ListCart = require("../models/ListCart");

//Add

const addListItem = (req, res, next) => {
  const { name, amount, price } = req.body;

  const card = ListCart.create({
    name,
    amount,
    price,
  });
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

const getListItem = (req, res, next) => {
  //Find one
  ListCart.findById(req.params.item_id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.send("Getting one");
};

const editListCart = (req, res, next) => {
  //Update
  ListCart.findByIdAndUpdate(req.params.item_id, req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("güncellendi");
    }
  });
};

const deleteListItem = (req, res, next) => {
  //Delete
  ListCart.findByIdAndRemove(req.params.item_id, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Silindi");
    }
  });
};

module.exports = {
  getListCart,
  getListItem,
  addListItem,
  editListCart,
  deleteListItem,
};
