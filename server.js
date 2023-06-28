require("dotenv").config();
const app = require("express")();
const sanitize = require("./sanitize");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

sanitize(app);

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { name, amount } = req.body;
    if (
      !amount ||
      typeof amount !== "number" ||
      amount < 100 ||
      amount > 10000
    ) {
      return res.status(400).json({
        status: "error",
        message: "Arguments sent to server are invalid",
      });
    }

    const success_url = process.env.SERVER_URL + "/success.html";
    const cancel_url = process.env.SERVER_URL + "/error.html";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name || getRandomProductName(),
            },
            unit_amount: parseInt(amount) * 105,
          },
          quantity: 1,
        },
      ],
      success_url,
      cancel_url,
    });

    res.status(201).json({ url: session.url });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
});

function getRandomProductName() {
  // Predefined array of strings
  const strings = [
    "Paying a debt",
    "Purchasing Goods and Services",
    "Bill Payments",
    "Money Transfers",
    "Investments",
    "Savings and Deposits",
    "Borrowing and Lending",
    "Foreign Exchange",
    "Insurance Premiums",
    "Donations and Charitable Contributions",
    "Speculation and Trading",
    "Government Taxes and Fines",
    "Business Transactions",
    "Mergers and Acquisitions",
    "Risk Management",
    "Financial Planning and Budgeting",
  ];

  // Select a random index from the array
  const randomIndex = Math.floor(Math.random() * strings.length);

  // Retrieve the random string
  return strings[randomIndex];
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
