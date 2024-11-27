const express = require("express"); // import the express library

const indexRouter = require("./routes/index"); // import routes we put in index.js

const app = express(); // make new program page and server

app.use("/", indexRouter); // everything sent to indexRouter to be handled

const server = app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port", server.address().port);
}); // use either server 3000 or what you are told to. Then tell us what the server address is
