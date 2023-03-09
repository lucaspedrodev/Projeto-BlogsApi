/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const postCategory = sequelize.define(
        'PostCategory',
     {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
     }, {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
     }
    )
    postCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: postCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId'
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blogPosts',
          through: postCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId'
        });
      }
 return postCategory;
};