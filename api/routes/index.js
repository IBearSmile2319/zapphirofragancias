// export all routes from here
const adminRoutes = require('./admin.routes');
const userRoutes = require('./user.routes');

module.exports = (app) => {
    app.use('/api/admin', adminRoutes);
    app.use('/api/user', userRoutes);
}