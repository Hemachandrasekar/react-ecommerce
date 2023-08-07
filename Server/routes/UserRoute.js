const { verifyTokenAndAuthendication, verifyTokenAndAdmin } = require('../middleware/verifyToken');
const User = require('../models/User');

const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.send('welcome User !!!');
// });

//update user
router.put('/:id',verifyTokenAndAuthendication,async (req, res) => {
  if(req.body.password){
    password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString()
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,{
        $set:req.body
      },{new:true}
    )
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
});

//delete 

router.delete("/:id",verifyTokenAndAuthendication,async (req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted...")
  } catch (error) {
    res.status(500).json({error})
    
  }
})


//get user
router.get("/find/:id",verifyTokenAndAdmin,async (req,res) => {
  try {
    await User.findById(req.params.id)
    const {password, ...others} = user._doc;
    res.status(200).json({...others});
  } catch (error) {
    res.status(500).json({error})
    
  }
})

//get all user
router.get("/",verifyTokenAndAdmin,async (req,res) => {
  const queery=req.query.new
  try {
    const users= query ? await User.find().sort({_id:1}).list(5) : await User.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error})
    
  }
})
// router.get('/', (req, res) => {
//   res.json({
//     username: 'Meow',
//   });
// });

module.exports = router;
