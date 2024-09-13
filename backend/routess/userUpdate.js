// const {authMiddleware} = require("../routess/middlerwares")
// const { User } = require("../db");
// const zod = require("zod");

// const updateBody = zod.object({
//     password: zod.string().optional(),
//     firstName:zod.string().optional(),
//     lastName : zod.string().optional()
// })
// router.put("/update",authMiddleware,async (req,res)=>{
//     console.log("dfgdfg");
    
//     const {success} = updateBody.safeParse(req.body);
//     if(!success){
//         res.status(404).json({
//             mesg:"erre while updating information"
//         })
//     }
//     await User.updateOne({ _id: req.userId }, req.body);
//     // this is how we use req which is addes in middlewares 

//     res.json({mesg:"updated Succesfully"})
// })


// router.get("/bulk", async (req, res) => {
//     const filter = req.query.filter || "";

//     const users = await User.find({
//         //The $or operator is used to match documents that satisfy at least one of the conditions specified in the array.
//         $or: [{
//             firstName: {
//                 "$regex": filter
// // Matches users whose firstName field contains the substring specified by filter
//             }
//         }, {
//             lastName: {
//                 "$regex": filter
//             }
//         }]
//     })

//     res.json({
//         user: users.map(user => ({
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             _id: user._id
//         }))
//     })
// })
module.exports=router;