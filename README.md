# Checklist System

## Table of Contents

1. Overview

2. Features

3. Technologies Used

4. Setup Instructions

5. Usage

5. Project Structure

7. Checklist Rules

8. Adding New Rules

## Overview
The Checklist System is a Node.js application that evaluates input data from an API against a predefined set of rules and displays the evaluation results on a user-friendly dashboard. 
It is designed for scalability and allows easy modification or addition of new rules.

## Features

1. Fetches input data from an external API.

2. Evaluates multiple conditions dynamically.

3. Displays results (Pass/Fail) on a dashboard.

4. Modular and clean code for easy maintenance.

5. Scalable configuration for adding new rules without major changes.

## Technologies Used

Backend: Node.js, Express.js

Frontend: HTML, CSS, EJS (for templating)

API Requests: Axios

Environment Configuration: dotenv

## Setup Instructions

1. Clone the Repository

    `git clone <repository-url>`

    `cd checklist-system`

2. Install Dependencies

    `npm install`

3. Configure Environment Variables

4. Create a .env file in the project root and add the `API URL:API_URL=http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639`

5. Start the Application
    `node app.js`

6. Access the Dashboard
   Open your browser and navigate to:
   `http://localhost:3000`

## Usage

The dashboard displays the evaluation status (Pass/Fail) for each checklist rule.

Data is fetched from the configured API, and rules are applied dynamically.

## Project Structure

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

└── README.md            # Project documentation`

## Checklist Rules

The rules are defined in config/rules.js. Each rule consists of:

ID: A unique identifier.

Name: A short description of the rule.

Condition: A function that evaluates the rule against the input data.

### Current Rules

Valuation Fee Paid: isValuationFeePaid must be true.

UK Resident: isUkResident must be true.

Risk Rating Medium: riskRating must equal "Medium".

LTV Below 60%: Loan-to-Value ratio (Loan Required / Purchase Price \* 100) must be less than 60%.

## Adding New Rules

To add a new rule:

Open the config/rules.js file.

Add a new rule object, e.g.:

javascript

`{id: 5, name: "New Rule Name",  condition: (data) => /\* Your condition logic \*/}`

Restart the server for the changes to take effect.
