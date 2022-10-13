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
    static associate(models: any) {
      // define association here
    }
    toJSON() {
      return{...this.get(), uuid:undefined};
    }
  }
  User.init({
    uuid:{type: DataTypes.UUID, deafultValue: DataTypes.UUIDV4},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};