const routes = module.exports = require('next-routes')()

routes
.add('dashboard', '/', 'admin/dashboard')
.add('profile', '/my-profile', 'admin/profile')
.add('profilePage', '/my-profile/:id', 'admin/profile')