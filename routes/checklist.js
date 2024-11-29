const express = require("express");
const axios = require("axios");
const rules = require("../config/rules");
require("dotenv").config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Fetch data from the API
    const response = await axios.get(process.env.API_URL);
    const applicationData = response.data;

    // Evaluate checklist rules
    const results = rules.map((rule) => ({
      id: rule.id,
      name: rule.name,
      status: rule.condition(applicationData) ? "Passed" : "Failed",
    }));

    // Render the dashboard
    res.render("index", { results });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
