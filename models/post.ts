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
    static associate(models: any) {
      // define association here
    }
  }
  Post.init({
    body: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'post',
    modelName: 'Post',
  });
  return Post;
};