const { DataTypes  } = require('sequelize');
const sequelize = require('../config/database')
const { v4: uuidv4 } = require('uuid')


const Payment = sequelize.define('Payment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    booking_id: {
      type: DataTypes.UUID,
      references: {
        model: 'bookings',
        key: 'id'
      }
    },
    payment_reference: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'pending'
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    tableName: 'payments'
  });
  
  module.exports = Payment;