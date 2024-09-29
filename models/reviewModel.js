const { DataTypes  } = require('sequelize');
const sequelize = require('../config/database')
const { v4: uuidv4 } = require('uuid')

const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    apartment_id: {
      type: DataTypes.UUID,
      references: {
        model: 'apartments',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    comment: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    tableName: 'reviews'
  });
  
  module.exports = Review;