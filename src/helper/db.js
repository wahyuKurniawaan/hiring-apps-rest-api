const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hire_job_app'
})

connection.connect((err) => {
  err ? console.log(err) : console.log('Database Connected!')
})

module.exports = connection
