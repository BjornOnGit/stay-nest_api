const { DataTypes  } = require('sequelize');
const sequelize = require('../config/database')
const { v4: uuidv4 } = require('uuid')

const Apartment = sequelize.define('Apartment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING(255),
    },
    price_per_night: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Array of image URLs
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    tableName: 'apartments'
  });
  
  module.exports = Apartment;