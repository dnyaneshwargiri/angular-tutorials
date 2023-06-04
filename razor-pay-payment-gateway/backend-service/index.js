const Razorpay = require("razorpay");
const express = require("express");
const utility = require("./utility");
const cors = require("cors");
const app = express();
const port = 3000;
const razorPayKeys = require("./configs/keys.json");
app.use(express.json()); // For parsing JSON request bodies
// Enable CORS for all routes
app.use(cors());

var instance = new Razorpay({
  key_id: razorPayKeys.key_id,
  key_secret: razorPayKeys.key_secret,
});

app.post("/api/createPaymentOrder", (req, res) => {
  // Handle POST request here
  var amount = utility.rupeesToPaise(req.body.payload.amount);
  var options = {
    amount: amount, // amount in the smallest currency unit here paise
    currency: "INR",
    receipt: "order_rcptid_11",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      res.status(500);
      let response = { status: 500, data: err };
      res.send(response);
    } else if (order) {
      res.status(200);
      let response = { status: 200, data: order };
      res.send(response);
    }
  });
});

app.post("/api/validatePayment", (req, res) => {
  const razorpay_signature = req.body.payload.razorpay_signature;
  const secret = instance.key_secret;
  const order_id = req.body.payload.original_order_id;
  const razorpay_payment_id = req.body.payload.razorpay_payment_id;
  var {
    validatePaymentVerification,
  } = require("./node_modules/razorpay/dist/utils/razorpay-utils");

  const isPaymentVerfied = validatePaymentVerification(
    { order_id: order_id, payment_id: razorpay_payment_id },
    razorpay_signature,
    secret
  );
  isPaymentVerfied ? res.status(200) : res.status(500);
  res.send({ data: { isPaymentVerfied: isPaymentVerfied } });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
