import {Sequelize} from "sequelize";

const db = new Sequelize('natrition_guardian_db','root','',{
    host: "localhost",
    dialect:"mysql"
});

export default db;