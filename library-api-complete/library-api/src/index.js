require("dotenv").config();
const express = require("express");
const app = express();
const bookRoutes = require("./routes/books");
const memberRoutes = require("./routes/members");
const loanRoutes = require("./routes/loans");

app.use(express.json());
app.use("/books", bookRoutes);
app.use("/members", memberRoutes);
app.use("/loans", loanRoutes);

const PORT = 3000;
app.get("/", (req, res) => {
  res.send(
    `📚 Welcome to the Library API\n\n` +
    `🔗 Links:\n` +
    `- http://localhost:3000/members\n` +
    `- http://localhost:3000/books\n` +
    `- http://localhost:3000/loans`
  );
});

app.listen(PORT, () => {
  console.log(`Library API running at http://localhost:${PORT}`);
});
