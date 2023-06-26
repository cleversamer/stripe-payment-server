require("dotenv").config();
const app = require("express")();
const sanitize = require("./sanitize");

sanitize(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
