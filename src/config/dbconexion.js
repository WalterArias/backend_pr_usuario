/**
 * administra la conexion con la base de datos
 * usamos la libreria mysql2 para interactuar con MYSQL
 * esta libreria me permite implementar consultas, transacciones,
 * procedimientos almacenados etc.
 * Una mejor opcion es usar un ORM: son libreria con clases independientes
 * del motor de bases de datos, sequelize, prisma.
 */

import mysql from "mysql2/promise"; // importamos la libreria

//creamos una constante POOL
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || "localhost",
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
  user: process.env.MYSQL_ADDON_USER || "root",
  password: process.env.MYSQL_ADDON_PASSWORD || "",
  database: process.env.MYSQL_ADDON_DB || "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;
