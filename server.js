// import mongodb here
const dotenv = require("dotenv");

// handle uncaught exception (error handling)

dotenv.config({ path: "./config.env" });

const app = require("./app");

// Connect to mongo db database here

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});

// handle unhandled rejection (error handling)
