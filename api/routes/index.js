// export all routes from here
const adminRoutes = require('./admin.routes');
const userRoutes = require('./user.routes');
const publicRoutes = require('./public.routes');
module.exports = (app) => {
    app.use('/api', publicRoutes)
    app.use('/api/admin', adminRoutes);
    app.use('/api/user', userRoutes);
}