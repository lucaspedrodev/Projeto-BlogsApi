/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          },
          image: DataTypes.STRING,
          displayName: DataTypes.STRING
        },
        {
          tableName: 'users',
          timestamps: false,
          underscored: true,
        }
      )
      User.associate = (models) => {
        User.hasMany(models.BlogPost, { 
          foreignKey: 'userId',
           as: 'blogPost' ,
        }
      );
      };
return User;
};