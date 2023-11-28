import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("usuario", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dt_nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  endereco: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  senha: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},
{
  timestamps: false,
  schema: 'ecommerce'
});