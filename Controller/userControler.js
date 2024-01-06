const userModel = require("../Models/userModel");
// create a user
const createUser = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const user = await userModel.create({
      name,
      lastname,
      email,
      password,
    })
    res.status(201).json({
      success:true,
      massage:"user register successfully",
      user,
    })
  } catch (error) {
    console.log(`error in creating user ${error}`)
    res.status(401).json({
      success:false,
      massage:"error in register user",
      error,
    })
  }
};

// getUser 

const getUser = async(req,res)=>{
try {
  const users = await userModel.find({})
  res.status(200).json({
    success:true,
    massage:" get all user details succsefully ",
    totalusers:users.length,
    users,
  })
} catch (error) {
  console.log(`error in get user ${error}`)
  res.status(401).json({
    success:false,
    massage:"Error in geting user ",
    error:error.massage,
  })
}
}
// get single user
const getsingleUser = async(req,res)=>{
try {
  
  const user = await userModel.findById(req.params.id)
  if(user){
    res.status(200).json({
      success:true,
      massage:"Find single user succssfully",
      user,
    })
  }else{
    res.status(400).send("user not found")
  }
 
} catch (error) {
  console.log(`error in getting sigke user ${error}`)
  res.status(401).json({
    success:false,
    massage:"error in find single user",
    
  })
}
}
// update user
// const updateUser = async()=>{
// const user = await  userModel.findById(req.params.id);
// if(user){
// user.name = req.body.name || user.name
// user.email=req.body.email || user.email 
// if(user){
//   user.password=req.body.password;
// }
// const updatedUser = await user.save()
// res.status(200).json({
//   success:true,
//   _id: updatedUser._id,
//   name:updatedUser.name,
//   email:updatedUser.email,
//   isAdmin:updatedUser.isAdmin
// });
// }else{
// res.status(400);
// throw new Error("User not found ")
// }
// };
const updateUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        // Only update the password if a new one is provided
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        success: true,
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(400).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// DELETE USER 
// const deleteUser = async(req,res)=>{
// try {
//   const user = await userModel.findById(req.params.id)
//   if(user){
//   await user.remove()
//   res.status(200).json({
//     success:false,
//     massage:"userDeleted successfully"
//   });
//   }else{
// res.status(400)
// throw new Error('ERROR NOT FOUND')
//   }
// } catch (error) {
//   console.log(`Error in deleting the user ${error}`)
//   res.status(500).json({
//     success:false,
//     massage:"error in deleting the data ",
//     error,

//   })
// }
// }

const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.params.id });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error(`Error in deleting the user: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error in deleting the user data',
      error: error.message,
    });
  }
};

module.exports = {
  deleteUser,
};


module.exports = { createUser,getUser,getsingleUser,updateUser,deleteUser };
