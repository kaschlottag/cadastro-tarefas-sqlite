const{DataTypes}=require("sequelize");
const sequelize = require("../database/db");

const tarefa = sequelize.define("Tarefa",{
    titulo: {
        type:DataTypes.STRING,
        allowNull:false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    responsavel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        dafaulValue: "Pendente",
    },

});

module.exports = Tarefa;