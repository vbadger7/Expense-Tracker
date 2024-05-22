const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                user.password = await bcrypt.hash(user.password, 10);
            }
        }
    });

    User.prototype.validPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    };

    User.associate = (models) => {
        User.hasMany(models.Expense, { foreignKey: 'userId' });
    };

    return User;
};