const { Model, Datatype } = require('sequelize');
const sequelize = require('../config/connection'); 

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      commentText: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'project',
    }
);

module.exports = Comment;