const dotenv = require('dotenv')
const sequelize = require('./config/database')
dotenv.config({ path: './config.env' })

const User = require('./models/userModel')
const Apartment = require('./models/apartmentModel')
const Booking = require('./models/bookingModel')
const Review = require('./models/reviewModel')
const Payment = require('./models/paymentModel')

const app = require('./app')
const port = process.env.PORT || 3000

User.hasMany(Booking, { foreignKey: 'user_id' })
Booking.belongsTo(User, { foreignKey: 'user_id' })

Apartment.hasMany(Booking, { foreignKey: 'apartment_id' })
Booking.belongsTo(Apartment, { foreignKey: 'apartment_id' })

User.hasMany(Review, { foreignKey: 'user_id' })
Review.belongsTo(User, { foreignKey: 'user_id' })

Apartment.hasMany(Review, { foreignKey: 'apartment_id' })
Review.belongsTo(Apartment, { foreignKey: 'apartment_id' })

Booking.hasOne(Payment, { foreignKey: 'booking_id' })
Payment.belongsTo(Booking, { foreignKey: 'booking_id' })

sequelize
  .authenticate()
  .then(() => console.log('PostgreSQL connected!'))
  .catch(err => console.error('Unable to connect to the database:', err))

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced!')
  })
  .catch(err => console.log('Error syncing database:', err))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})