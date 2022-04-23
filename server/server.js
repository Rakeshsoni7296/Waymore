const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
