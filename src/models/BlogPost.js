
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define(
        'BlogPost',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
        },
        content:{
            type: DataTypes.STRING,
        },
        userId:{
            type: DataTypes.INTEGER,
            },
        published:{
            type: DataTypes.DATE
        },
        updated:{
            type: DataTypes.DATE
        },
    },{
        tableName: 'blog_posts',
        timestamps: false,
        underscored: true,
    },
);

    blogPosts.associate = (models) => {
        blogPosts.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'User',
        })
    }
    return blogPosts;
};