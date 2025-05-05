# 📐 Metric-Imperial Converter

Project built for the [Metric-Imperial Converter API challenge from freeCodeCamp](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter).

## 📌 Overview

The Metric-Imperial Converter API accepts a unit and numeric input (e.g., 10kg or 3.1mi), performs conversion between metric and imperial units, and returns the result in JSON format. It includes full test coverage using Mocha and Chai.

## 📡 API Endpoint

GET /api/convert?input={value}{unit}

### Examples:
- /api/convert?input=10L
- /api/convert?input=32mi

### Successful Response:
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}

### Invalid Unit:
{
  "error": "invalid unit"
}

### Invalid Number:
{
  "error": "invalid number"
}

### Invalid Number and Unit:
{
  "error": "invalid number and unit"
}

## ⚙️ Technologies Used

- Node.js
- Express.js
- Mocha
- Chai
- Chai HTTP
- dotenv

## 🧪 Running Tests

Run the unit and functional tests:

npm install  
npm test

Tests include:
- Valid conversions
- Invalid numbers and/or units
- Edge case handling

## 🛠️ Getting Started Locally

1. Clone the repository:
   git clone https://github.com/giannis07/fcc_metric_imperial_converter.git  
   cd fcc_metric_imperial_converter

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. Run the test suite:
   npm test

The app will be running on http://localhost:3000 by default.

## 💻 Source Code

🔗 https://github.com/giannis07/fcc_metric_imperial_converter
