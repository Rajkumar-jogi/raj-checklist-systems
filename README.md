Checklist System

Table of Contents

Overview

Features

Technologies Used

Setup Instructions

Usage

Project Structure

Checklist Rules

Adding New Rules

Overview

The Checklist System is a Node.js application that evaluates input data from an API against a predefined set of rules and displays the evaluation results on a user-friendly dashboard. It is designed for scalability and allows easy modification or addition of new rules.

Features

Fetches input data from an external API.

Evaluates multiple conditions dynamically.

Displays results (Pass/Fail) on a dashboard.

Modular and clean code for easy maintenance.

Scalable configuration for adding new rules without major changes.

Technologies Used

Backend: Node.js, Express.js

Frontend: HTML, CSS, EJS (for templating)

API Requests: Axios

Environment Configuration: dotenv

Setup Instructions

1. Clone the Repository

bash

Copy code

git clone <repository-url>

cd checklist-system

1. Install Dependencies

bash

Copy code

npm install

1. Configure Environment Variables

Create a .env file in the project root and add the API URL:

env

Copy code

API\_URL=http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639

1. Start the Application

bash

Copy code

node app.js

1. Access the Dashboard

Open your browser and navigate to:

arduino

Copy code

http://localhost:3000

Usage

The dashboard displays the evaluation status (Pass/Fail) for each checklist rule.

Data is fetched from the configured API, and rules are applied dynamically.

Project Structure

bash

Copy code

checklist-system/

├── public/              # Static files (CSS)

│   └── styles.css       # Stylesheet for the dashboard

├── views/               # EJS templates for rendering UI

│   └── index.ejs        # Dashboard template

├── routes/              # Application routes

│   └── checklist.js     # Logic for evaluating rules

├── config/              # Configuration files

│   └── rules.js         # Checklist rules

├── app.js               # Entry point for the server

├── .env                 # Environment variables

├── package.json         # Node.js dependencies and scripts

└── README.md            # Project documentation

Checklist Rules

The rules are defined in config/rules.js. Each rule consists of:

ID: A unique identifier.

Name: A short description of the rule.

Condition: A function that evaluates the rule against the input data.

Current Rules

Valuation Fee Paid: isValuationFeePaid must be true.

UK Resident: isUkResident must be true.

Risk Rating Medium: riskRating must equal "Medium".

LTV Below 60%: Loan-to-Value ratio (Loan Required / Purchase Price \* 100) must be less than 60%.

Adding New Rules

To add a new rule:

Open the config/rules.js file.

Add a new rule object, e.g.:

javascript

Copy code

{

id: 5,

name: "New Rule Name",

condition: (data) => /\* Your condition logic \*/,

}

Restart the server for the changes to take effect.
