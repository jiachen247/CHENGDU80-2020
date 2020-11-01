/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'company',
    {
      ticker: {
        type: DataTypes.TEXT,
        allowNull: true,
        primaryKey: true,
      },
      sector: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      trailingpe: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      sharespercentsharesout: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      regularmarketvolume: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      averagevolume10days: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      enterprisetoebitda: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      earningsquarterlygrowth: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      longbusinesssummary: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      logo_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profitmargins: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      pricetosalestrailing12months: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      payoutratio: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      industry: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      marketcap: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bookvalue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      trailingeps: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      dividendrate: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pricetobook: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      beta: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'company',
      schema: 'public',
      timestamps: false,
    },
  );
};
