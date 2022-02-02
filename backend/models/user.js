module.exports = (sequelize, DataTypes) => {

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      prenom: {
      type: DataTypes.STRING
    },
      nom: {
      type: DataTypes.STRING
    },
      email: {
          type: DataTypes.STRING,
          unique: true
      },
      password: {
          type: DataTypes.STRING
      }
  });
    User.associate = (models) => {
      User.hasMany(models.Post)
      User.hasMany(models.Comment)
  },
   {
    sequelize,
    modelName: 'User'
  };

return User;
};
