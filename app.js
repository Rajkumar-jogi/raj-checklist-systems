const express = require("express");
const checklistRoutes = require("./routes/checklist");

const app = express();

// Set up template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Serve static files
app.use(express.static("public"));

// Routes
app.use("/", checklistRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
