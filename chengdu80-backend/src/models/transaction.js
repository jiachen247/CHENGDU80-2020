/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'transaction',
    {
      date: {
        type: DataTypes.TEXT,
        allowNull: true,
        primaryKey: true,
      },
      ticker: {
        type: DataTypes.TEXT,
        allowNull: true,
        primaryKey: true,
      },
      comnam: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      bidlo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      askhi: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      openprc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      prc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      vol: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      shrout: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'transaction',
      schema: 'public',
      timestamps: false,
    },
  );
};
