const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
