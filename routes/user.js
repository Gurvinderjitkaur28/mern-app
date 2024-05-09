const express=require('express');
const router=express.Router();
const {handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
}=require('../controller/user')


router.get("/", handleGetAllUsers);

router.post("/",handleCreateNewUser);

// app.post('/api/users', (req, res) => {
//     const newUser = req.body;
//     user.push({ ...newUser, id: user.length + 1 });
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err, data) => {
//         if (err) {
//             console.error("Error writing to file:", err);
//             return res.status(500).json({ error: "Internal server error" });
//         }
//         return res.json({ status: "success", id: user.length });
//     });
// });

router.route("/:id").get(handleGetUserById)

  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById)
  
  module.exports=router;
