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



router.route("/:id").get(handleGetUserById)

  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById)
  
  module.exports=router;
