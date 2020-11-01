var DataTypes = require('sequelize').DataTypes;
var _company = require('./company');
var _watchlist = require('./watchlist');
var _transaction = require('./transaction');

function initModels(sequelize) {
  var company = _company(sequelize, DataTypes);
  var watchlist = _watchlist(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);

  return {
    company,
    watchlist,
    transaction,
  };
}
module.exports = { initModels };
