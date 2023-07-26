const ejs = require('ejs');
const mssql = require('mssql');

const welcomeEmail = async () => {
    const pool = await mssql.connect(sqlConfig);
    if (pool.connecting) {
        console.log('connecting to database...');
    } else if (pool.connected) {
        console.log('connected to database');
        const users = await pool.request().query(`
            SELECT email FROM users WHERE issent = 0 
        `)
        if (users.recordset.length > 0) {
            console.log('sending emails...');
            users.recordset.forEach(async (user) => {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: user.email,
                    subject: 'Welcome to our website',
                    html: await ejs.renderFile(__dirname + '/views/welcome.ejs', { name: 'John Doe' })
                };
                await sendMail(mailOptions);
                await pool.request().query(`
                    UPDATE users SET issent = 1 WHERE email = '${user.email}'
                `)
            });


    } else {
        console.log('error connecting to database');
    }
}}

module.exports = {
    welcomeEmail
}