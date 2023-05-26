const pool=require('../db/db')
const queryUer=require('../queries/queries_user')

const getUser= async (req,res)=>{
  try {
    const allUsers = await pool.query(
     queryUer.getUserQuery
    );
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
    
  }
  const getUserById=async (req,res)=>{
    
    console.log(req.body);
    const { id } = req.params;
    try {
      const user = await pool.query(queryUer.getUserByIdQuery, [id]);
      res.json(user.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
    
  }
  const createUser = async(req, res) => {
    try {
      console.log(req.body);
      const { name,email } = req.body;
      const newUser = await pool.query(
       queryUer.createUserQuery,
        [name,email]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  }
  const uqdateUser =async (req, res) => {
    console.log(req.body);
    try {
      const { id } = req.params;
      const { name,email } = req.body;
      const updateTodo = await pool.query(
       queryUer.updateUserQuery,
        [name,email, id]
      );
      res.json({ message: "Success", Data: name,email });
    } catch (err) {
      console.error(err.message);
    }
  }
  const delectUser = async(req, res) => {
    console.log(req.body);
  const { id } = req.params;
  try {
    const todo = await pool.query(queryUer.deleteUserQuery, [id]);
    res.json({ message: "Success", Data: id });
  } catch (err) {
    console.error(err.message);
  }
  }
  module.exports={
    getUser,
    createUser,
    getUserById,
    createUser,
    uqdateUser,
    delectUser
  }