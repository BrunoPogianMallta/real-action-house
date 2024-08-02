module.exports = (sequelize, DataTypes) => {
    const SystemAccount = sequelize.define('SystemAccount', {
      accountName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      balance: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
      }
    });
  
    return SystemAccount;
  };
  