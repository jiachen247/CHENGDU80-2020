/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'watchlist',
    {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ticker: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      timestamp: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_DATE'),
      },
    },
    {
      sequelize,
      tableName: 'watchlist',
      schema: 'public',
      timestamps: false,
    },
  );
};
