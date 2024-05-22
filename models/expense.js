module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define('Expense', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Expense.associate = (models) => {
        Expense.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Expense;
};
