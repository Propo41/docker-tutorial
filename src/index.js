const app = require("express")();
require("dotenv").config();
const Point = require("./models/Point");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

console.log(mongoUri);
// connect to mongo
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  const currPoint = await Point.findOne({ number: 1 });
  if (currPoint) {
    res.send("Point with score: " + currPoint.score);
  } else {
    const point = new Point({
      number: 1,
    });
    point
      .save()
      .then((result) => {
        console.log(result);
        res.send("Point with scorezzz: " + result.score);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.get("/increase", (req, res) => {
  Point.findOne({ number: 1 }, (err, point) => {
    point.score = point.score + 1;
    point.save((err, point) => {
      res.send("Point with score: " + point.score);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
