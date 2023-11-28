import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("produto", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  produto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao_produto: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  informacoes_tecnicas: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  eh_promocao: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  foto: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  tipo:{
    type: Sequelize.STRING,
    allowNull: false,
  }
  
},
{
  timestamps: false,
  schema: 'ecommerce'
});