"use strict";

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
      },
      {
          freezeTableName :true
  
    });
       Comment.associate = (models) => {
        Comment.belongsTo(models.User,{
            allowNull: false,
            onDelete: 'CASCADE'
        })
            Comment.belongsTo(models.Post,{
                foreignKey: "PostId",
                allowNull: false,
                onDelete: 'CASCADE'
            })
  },
  {
    sequelize,
    modelName: 'Comment'
  };
  return Comment;
  };