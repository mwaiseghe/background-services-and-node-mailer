const express = require('express');
const cron = require('node-cron');
const { welcomeEmail } = require('./EmailService/newUser');

const app = express();

cron.schedule('*/10 * * * * *', () => {
    console.log('running a task every 5 seconds');
    welcomeEmail();
});

app.listen(8080, () => {            
  console.log('Server started!');
});
