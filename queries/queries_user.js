const getUserQuery='SELECT * FROM users';
const getUserByIdQuery='SELECT * FROM users WHERE id=$1';
const createUserQuery='INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *'
const updateUserQuery='UPDATE users SET name = $1, email = $2 WHERE id = $3'
const deleteUserQuery='DELETE FROM users WHERE id = $1'
module.exports={
    getUserQuery,
   getUserByIdQuery,
   createUserQuery,
   updateUserQuery,
   deleteUserQuery
}