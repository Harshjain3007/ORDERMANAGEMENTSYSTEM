const model = require('../models/customerModel')

const phonevalidator = /^[0-9]{10}$/;
const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value != "string") return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const registerCustomer = async (req, res) => {
  try {
    let customerDetails = req.body;
    let { firstName, lastName, phone, category, totalOrder } = customerDetails;
    if (!firstName) {
      return res.status(400).send({ status: false, msg: "name is mandatory" });
    }
    if (!isValid(firstName)) {
      return res
        .status(400)
        .send({ status: false, msg: "firstName is not valid" });
    }

    if (!lastName) {
      return res.status(400).send({ status: false, msg: "name is mandatory" });
    }
    if (!isValid(lastName)) {
      return res
        .status(400)
        .send({ status: false, msg: "lastName is not valid" });
    }

    if (!phone) {
      return res.status(400).send({ status: false, msg: "Phone number is mandatory" });
    }
    if (!phonevalidator.test(phone)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid number" });
    }

    let createdData = await customerModel.create(customerDetails);
    return res.status(201).send({ status: true, data: createdData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { registerCustomer };