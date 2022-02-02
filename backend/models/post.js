module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true
      },
      content: {
          type: DataTypes.STRING,
          allowNull: false
      },
    },
    {
        freezeTableName :true

  });
     Post.associate = (models) => {
      Post.belongsTo(models.User,{
        allowNull: false,
        onDelete: 'CASCADE',
      })
      Post.hasMany(models.Comment)
    }, {
  //sequelize,
  //modelName: 'Post'
  };
  return Post;
};