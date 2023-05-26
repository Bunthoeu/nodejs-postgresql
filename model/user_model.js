const pg=require('pg')
const user=pg.model(
    'users',pg.Schema({
        id:Number,
        name:String,
        email:String,
    })
);
module.exports={
    user,
}