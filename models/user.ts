
const {
  Model
} = require('sequelize');
export default (sequelize: any, DataTypes: { STRING: any; INTEGER: any; UUID: any; UUIDV4: any}) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}:{Post:any}) {
      this.hasMany(Post, {foreignKey:'userId', as: 'posts'});
    }
  }
  User.init({
    uuid:{type: DataTypes.INTEGER, allowNull: false, validate: {notNull:{msg: 'User must have uuid'}, notEmpty:{msg: 'UUID should not be empty'}}},
    name: {type: DataTypes.STRING, allowNull: false, validate: {notNull:{msg: 'User must have name'}, notEmpty:{msg: 'Name should not be empty'}}},
    email: {type: DataTypes.STRING, allowNull: false, validate: {notNull:{msg: 'User must have email'}, notEmpty:{msg: 'Email should not be empty'}, isEmail: {msg: 'Must be a valid email adress'}}},
    role: {type: DataTypes.STRING, allowNull: false, validate: {notNull:{msg: 'User must have role'}, notEmpty:{msg: 'Role should not be empty'}}}
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};