import database from '../database.js';
import { DataTypes } from 'sequelize';
import User from './User.js'; 

const Task = database.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED'),
        defaultValue: 'PENDING',
    },
}, {
    timestamps: true, // Adiciona createdAt e updatedAt
});

Task.belongsTo(User, { foreignKey: 'id_user', as: 'user' });


export default Task ;