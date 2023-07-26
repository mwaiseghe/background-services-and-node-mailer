# Using Node Mailer

## Installation

```bash
npm install express node-cron nodemailer ejs dotenv mssql
```

## Usage

```bash
npm start
```

## Note

* To pass data in a template, use the following syntax: `ejs.renderFile(template, {data: data}, (err, html) => {})`

* Inside the template, use the following syntax to access the data: `<%= data %>`
