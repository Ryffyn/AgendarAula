const LoginRoutes = require('./routes/LoginRoutes')
const UserRoutes = require('./routes/UserRoutes')
const ScheduleRoutes = require('./routes/ScheduleRoutes')



exports.registerRoutes = (app) => {
  app.use('/login', LoginRoutes)
  app.use('/user', UserRoutes),
  app.use('/schedule', ScheduleRoutes)
  
}




