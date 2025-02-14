const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my-dev-squad", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () =>
  console.log("yay mongodb connected :)")
);

mongoose.connection.on("error", () =>
  console.log("nay db connection error :(")
);
