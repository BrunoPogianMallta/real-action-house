module.exports = (sequelize, DataTypes) => {
    const Server = sequelize.define('Server', {
      serverName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Server;
  };
  