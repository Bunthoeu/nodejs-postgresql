const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_db',
  password: 'plans@2020',
  port: 5432,
})
pool.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("connection>>>>>")
})
module.exports=pool;