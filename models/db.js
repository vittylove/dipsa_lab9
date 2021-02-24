const mongoose = require("mongoose");

mongoose
.connect("DATABSE_URL=mongodb://localhost:27017/lab_9", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
})
.then(() => {
console.log("Connected to database!");
})
.catch((err) => {
console.log("Cannot connect to the database", err.message);
process.exit();
});
