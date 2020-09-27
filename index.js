const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const projectRouter = require('./src/routes/project')
const accountJobSeeker = require('./src/routes/account-job-seeker')
const accountRecruiter = require('./src/routes/account-recruiter')
const portofolioJobSeeker = require('./src/routes/portofolio_job_seeker')
const profileJobSeeker = require('./src/routes/profile_job_seeker')
const profileRecruiter = require('./src/routes/profile-recruiter')
const projectRecruiter = require('./src/routes/project-recruiter')
const skill = require('./src/routes/skill')
const workExpJobSeeker = require('./src/routes/work-exp-job-seeker')
const user = require('./src/routes/user')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/project', projectRouter)
app.use('/users', user)
app.use('/account-job-seeker', accountJobSeeker)
app.use('/account-recruiter', accountRecruiter)
app.use('/portofolio-job-seeker', portofolioJobSeeker)
app.use('/profile-job-seeker', profileJobSeeker)
app.use('/profile-recruiter', profileRecruiter)
app.use('/project-recruiter', projectRecruiter)
app.use('/skill', skill)
app.use('/work-exp-job-seeker', workExpJobSeeker)

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Authorization')
  next()
})

app.listen(process.env.PORT, () => {
  console.log('Listening to port 8080!')
})
app.get('/', (request, response) => {
  response.send({
     success: true,
     message: 'Back end server hiring apps wahyu kurniawan' 
  })
})
