const getUserQuery='SELECT * FROM users';
const getUserByIdQuery='SELECT * FROM users WHERE id=$1';
const createUserQuery='INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *'
const updateUserQuery='UPDATE users SET name = $1, email = $2 WHERE id = $3'
const deleteUserQuery='DELETE FROM users WHERE id = $1'
const searchUserQuery='SELECT * FROM users WHERE name LIKE ? OR email LIKE ?'
module.exports={
    getUserQuery,
   getUserByIdQuery,
   createUserQuery,
   updateUserQuery,
   deleteUserQuery,
   searchUserQuery
}