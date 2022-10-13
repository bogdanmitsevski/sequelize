const {
  Model
} = require('sequelize');
export default (sequelize: any, DataTypes: { STRING: any; }) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}:{User:any}) {
      this.belongsTo(User, {foreignKey:'userId'});
    }
  }
  Post.init({
    body: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};