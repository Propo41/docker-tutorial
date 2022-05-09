const app = require("express")();
require("dotenv").config();
const port = process.env.PORT;
const dummyEnv = process.env.DUMMY;

console.log(`dummyEnv: ${dummyEnv}`);

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
