const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const categoryRoute = require('./routes/category.route') ;
const questionsRoute = require('./routes/question.route') ;
const teamRoute = require('./routes/team.route') ;
const connectToDB = require("./db/connect");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;


app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hi from home" });
});

app.use("/api/categories", categoryRoute);
app.use("/api/questions", questionsRoute);
app.use("/api/teams", teamRoute);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found", status: 404 });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// // Add a new professional
// app.post('/professionals', (req, res) => {
//   const { name, expertise } = req.body;
//   if (!name || !expertise) {
//     return res.status(400).json({ error: 'Name and expertise are required' });
//   }
//   const id = professionals.length + 1;
//   const newProfessional = { id, name, expertise };
//   professionals.push(newProfessional);
//   res.status(201).json(newProfessional);
// });

app.listen(PORT, () => {
    connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
